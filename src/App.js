import { useEffect, useState, useCallback } from "react";
import "./App.css";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";
import { loadContract } from "./utils/load-contract";

function App() {
  const [web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
    contract: null,
  });

  const [balance, setBalance] = useState(null);
  const [account, setAccount] = useState(null);
  const [entrantsData, setEntrantsData] = useState({});

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
      const contract = await loadContract("Lottery", provider);
      setAccountListener(provider);

      if (provider) {
        setWeb3Api({
          ...web3Api,
          web3: new Web3(provider),
          provider,
          contract,
        });
      } else {
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
      const uniqueAddressesAndTimesEntered = allAddresses.reduce(
        (acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc),
        {}
      );

      // Listing the number of unique addresses of the entries (the participants total)
      const numberOfUniqueAddresses = Object.keys(
        uniqueAddressesAndTimesEntered
      ).length;

      // Get the address odf the contracts manager
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
  }, [web3Api.contract, shouldReload]);

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

  // const pickWinner = useCallback(async () => {
  //   const { contract, web3 } = web3Api;
  //   await contract.methods.pickWinner().send({
  //     from: contract.address,
  //   });
  //   reloadEffect();
  // }, [web3Api, account]);

  // Enter the lottery by transferring 0.1 eth to contract
  const enterLottery = useCallback(async () => {
    const { contract, web3 } = web3Api;
    await contract.sendTransaction({
      from: account,
      to: contract.address,
      value: web3.utils.toWei("0.1", "ether"),
    });
    reloadEffect();
  }, [web3Api, account]);

  return (
    <>
      <div className="lottery-wrapper">
        <div className="lottery">
          <div className="is-flex is-align-items-center">
            <span>
              <strong className="mr-2">Account: </strong>
            </span>
            {account ? (
              <div>{account}</div>
            ) : (
              <button
                className="button is-small"
                onClick={() =>
                  web3Api.provider.request({ method: "eth_requestAccounts" })
                }
              >
                Connect Wallet
              </button>
            )}
          </div>

          {canConnectToContract && (
            <div className="balance-view is-size-3 my-4">
              Contract Address: {web3Api.contract.address}
            </div>
          )}
          <div className="balance-view is-size-3 my-4">
            Current Balance: <strong>{balance}</strong> ETH
          </div>
          <button
            className="button is-link mr-2"
            onClick={enterLottery}
            disabled={!canConnectToContract}
          >
            Enter Lottery!
          </button>
          {isManager ? (
            <button
              className="button is-primary"
              disabled={!canConnectToContract}
              onClick={() => console.log(web3Api.contract)}
            >
              Random
            </button>
          ) : (
            ""
          )}
          {isManager ? (
            <button
              className="button is-primary"
              disabled={!canConnectToContract}
              onClick={pickWinner}
            >
              Pick Winner
            </button>
          ) : (
            ""
          )}
          {entrantsData.uniqueAddressesAndTimesEntered &&
            Object.entries(entrantsData.uniqueAddressesAndTimesEntered).map(
              ([address, timesEntered], i) => (
                <div key={i}>
                  Address {address}, has enthered the lottery {timesEntered}{" "}
                  times
                </div>
              )
            )}
          {canConnectToContract &&
            entrantsData.uniqueAddressesAndTimesEntered &&
            `You (${account}) have entered this lottery ${
              entrantsData.uniqueAddressesAndTimesEntered[account] || 0
            } times`}
        </div>
      </div>
    </>
  );
}

export default App;
