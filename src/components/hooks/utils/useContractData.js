import { useEffect, useState } from "react";

const useContractData = (shouldReload, web3Api) => {
  const { contract, web3 } = web3Api;

  const [contractData, setContractData] = useState({
    allAddresses: [],
    balance: null,
    contractAddress: "",
    managerAddress: "",
  });

  // These don't change once contract is loaded
  useEffect(() => {
    const getStaticContractData = async () => {
      const contractAddress = await web3Api.contract.address;
      const managerAddress = await web3Api.contract.manager.call();

      setContractData({
        ...contractData,
        contractAddress: contractAddress,
        managerAddress: managerAddress,
      });
    };
    web3Api.contract && getStaticContractData();
  }, [web3Api]);

  // These change within the contract and need to refresh
  useEffect(() => {
    const getVariableContractData = async () => {
      const balance = await web3.eth.getBalance(contract.address);

      // Finding out how many entries there are in order to have a limit for following loop
      let totalNumberOfEntries = web3Api.web3.utils.hexToNumber(
        await web3Api.web3.eth.getStorageAt(web3Api.contract.address)
      );

      let allAddresses = []; // Listing all of the address of the entries
      for (let i = 0; i < totalNumberOfEntries; i++) {
        allAddresses.push(await web3Api.contract.players.call(i));
      }

      setContractData({
        ...contractData,
        allAddresses: allAddresses,
        balance: web3.utils.fromWei(balance, "ether"),
      });
    };

    web3Api && getVariableContractData();
  }, [web3Api, shouldReload]);

  return contractData;
};

export default useContractData;
