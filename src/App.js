import { useEffect, useState } from "react";
import "./App.css";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import { loadContract } from "./utils/load-contract";
import Layout from "./components/ui/layout";
import Dashboard from "./components/ui/dashboard";

function App() {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    isProviderLoaded: false,
    web3: null,
    contract: null,
  });

  console.log("WEB3", web3Api);

  const [balance, setBalance] = useState(null);
  const [account, setAccount] = useState(null);
  const [entrantsData, setEntrantsData] = useState({
    managerAddress: "",
    totalNumberOfEntries: 0,
    allAddresses: [],
    numberOfUniqueAddresses: 0,
    uniqueAddressesAndTimesEntered: 0,
  });

  // Testing if the current account is the contract's manager or not
  const isManager = account === entrantsData.managerAddress;

  // Reload Helpers
  const [shouldReload, setShouldReload] = useState(false);
  const reloadEffect = () => setShouldReload(!shouldReload);

  // Checking if can connect to contract
  const canConnectToContract = account && web3Api.contract;

  const setAccountListener = (provider) => {
    provider.on("accountsChanged", (accounts) => window.location.reload());
    provider.on("chainChanged", (accounts) => window.location.reload());
  };

  // Loading provider
  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();

      if (provider) {
        const contract = await loadContract("Lottery", provider);
        setAccountListener(provider);

        setWeb3Api({
          web3: new Web3(provider),
          provider,
          contract,
          isProviderLoaded: true,
        });
      } else {
        setWeb3Api((web3Api) => ({
          ...web3Api,
          isProviderLoaded: true,
        }));
        console.error("Please, install Metamask.");
      }
    };

    loadProvider();
  }, []);

  // Loading Contract Balance
  useEffect(() => {
    const loadBalance = async () => {
      const { contract, web3 } = web3Api;
      const balance = await web3.eth.getBalance(contract.address);

      setBalance(web3.utils.fromWei(balance, "ether"));
    };

    web3Api.contract && loadBalance();
  }, [web3Api, shouldReload]);

  // Getting the current account address
  useEffect(() => {
    const getAccount = async () => {
      const accounts = await web3Api.web3.eth.getAccounts();
      setAccount(accounts[0]);
    };

    web3Api.web3 && getAccount();
  }, [web3Api.web3]);

  // Get entrants data
  useEffect(() => {
    const getEntrantsData = async () => {
      //  Getting the number of entries
      let totalNumberOfEntries = web3Api.web3.utils.hexToNumber(
        await web3Api.web3.eth.getStorageAt(web3Api.contract.address)
      );

      let allAddresses = []; // Listing all of the address of the entries
      for (let i = 0; i < totalNumberOfEntries; i++) {
        allAddresses.push(await web3Api.contract.players.call(i));
      }

      // Getting the uniqueAddresses and number of times each has entered
      const uniqueAddressesAndTimesEntered = Object.entries(
        allAddresses.reduce(
          (acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc),
          {}
        )
      );

      // Listing the number of unique addresses of the entries (the participants total)
      const numberOfUniqueAddresses = Object.keys(
        uniqueAddressesAndTimesEntered
      ).length;

      // Get the address of the contracts manager
      const managerAddress = await web3Api.contract.manager.call();

      setEntrantsData({
        managerAddress,
        totalNumberOfEntries,
        allAddresses,
        numberOfUniqueAddresses,
        uniqueAddressesAndTimesEntered,
      });
    };

    web3Api.web3 && getEntrantsData();
  }, [web3Api.contract, shouldReload, web3Api.web3]);

  const pickWinner = async () => {
    const { contract } = web3Api;

    try {
      const result = await contract.pickWinner({
        from: entrantsData.managerAddress,
      });

      console.log(result);
    } catch (err) {
      console.error("Dang! Operation has failed.", err);
    }
    reloadEffect();
  };

  // Enter the lottery by transferring 0.1 eth to contract
  const enterLottery = async () => {
    const { contract, web3 } = web3Api;
    await contract.sendTransaction({
      from: account,
      to: contract.address,
      value: web3.utils.toWei("0.1", "ether"),
    });
    reloadEffect();
  };

  return (
    <>
      <Layout>
        <Dashboard entrants={entrantsData} />
      </Layout>
    </>
  );
}

export default App;
