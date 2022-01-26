// import { useEffect, useState } from "react";
import "./App.css";
// import Web3 from "web3";
// import detectEthereumProvider from "@metamask/detect-provider";
import BaseLayout from "./components/ui/layout/base";
import DashboardContainer from "./components/ui/dashboard/dashboardContainer";
// import useContractData from "./components/hooks/utils/useContractData";
// import { useWeb3 } from "./components/providers";

function App() {
  // Reload Helpers
  // const [shouldReload, setShouldReload] = useState(false);
  // const reloadEffect = () => setShouldReload(!shouldReload);

  // Retreiving the contract static and variable data for ease of use
  // const contractData = useContractData(shouldReload, web3Api);

  // Testing if the current account is the contract's manager or not
  // const isManager = account === contractData.managerAddress;

  // const pickWinner = async () => {
  //   const { contract } = web3Api;

  //   try {
  //     const result = await contract.pickWinner({
  //       from: contractData.managerAddress,
  //     });

  //     console.log(result);
  //   } catch (err) {
  //     console.error("Dang! Operation has failed.", err);
  //   }
  //   reloadEffect();
  // };

  // Enter the lottery by transferring 0.1 eth to contract
  // const enterLottery = async () => {
  //   const { contract, web3 } = web3Api;
  //   await contract.sendTransaction({
  //     from: account,
  //     to: contract.address,
  //     value: web3.utils.toWei("0.1", "ether"),
  //   });
  //   reloadEffect();
  // };

  return (
    <>
      <BaseLayout>
        <DashboardContainer
        //  {...contractData}
        />
      </BaseLayout>
    </>
  );
}

export default App;

//  // Getting the uniqueAddresses and number of times each has entered
//  const uniqueAddressesAndTimesEntered = Object.entries(
//   allAddresses.reduce(
//     (acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc),
//     {}
//   )
// );

// Listing the number of unique addresses of the entries (the participants total)
// const numberOfUniqueAddresses = Object.keys(
//   uniqueAddressesAndTimesEntered
// ).length;
