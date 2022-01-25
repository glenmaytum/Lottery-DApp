import { useEffect } from "react";
import useSWR from "swr";

// Using the Metamask's chain ID reference numbers of the networks and assigning them names
const NETWORKS = {
  1: "Ethereum Mainnet",
  3: "Ropsten Test Network",
  4: "Rinkeby Test Network",
  5: "Goerli Test Network",
  42: "Kovan Test Network",
  56: "Binance Smart Chain",
  1337: "Ganache",
};

const targetNetwork = NETWORKS[process.env.REACT_APP_DEV_CHAIN_ID];

export const handler = (web3, provider) => () => {
  //the mutate will change that data which is ...rested
  const { data, mutate, ...rest } = useSWR(
    () => (web3 ? "web3/network" : null),
    async () => {
      const chainId = await web3.eth.getChainId(); // web3 method to get network ID
      return NETWORKS[chainId];
    }
  );

  // will listen for chain changed event and call mutate which will update the useSRW value in the return
  useEffect(() => {
    provider &&
      provider.on("chainChanged", (chainId) =>
        mutate(NETWORKS[parseInt(chainId, 16)])
      ); //parsing int as it is Hex format
  }, []);

  return {
    data,
    mutate,
    target: targetNetwork,
    isSupported: data === targetNetwork, // Is the network being used is supported or not
    ...rest,
  };
};
