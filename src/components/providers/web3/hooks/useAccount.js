import { useEffect, useState } from "react";
import useSWR from "swr";

// Consider hashing the manager function on contract
// it is now 2nd ganache account
// const adminAddresses = {
//   "0x8e49d7d2d6b684aa17a5cfbe145350f65f87056e50cf6621b2c7112cd1c76d76": true,
// };

// 0x4DA5635B18E32974098DB1D194679C4a86aa7Ae5

// const managerAddress = await web3Api.contract.manager.call();

// uses swr to return the account

export const handler = (web3, provider, contract) => () => {
  const [managerAddress, setManagerAddress] = useState();

  useEffect(() => {
    const getManager = () => {
      contract.methods
        .manager()
        .call()
        .then((result) => setManagerAddress(result));
    };
    contract && getManager();
  }, [contract]);

  const { data, mutate, ...rest } = useSWR(
    // The SWR response "data" (destructured above) is where the callback return will be stored
    () =>
      web3
        ? "web3/accounts" // Custom name to identify function with
        : null,
    async () => {
      const accounts = await web3.eth.getAccounts();
      return accounts[0]; //return the account address and it will be known as web/accounts
    }
  );

  // The runs on provider change.  It uses swr mutate to change the state of data like when accounts change
  useEffect(() => {
    provider &&
      provider.on("accountsChanged", (accounts) => mutate(accounts[0] ?? null));
  }, [provider]);

  // returns object with the data, checks if is admin
  return {
    data,
    managerAddress,
    isAdmin: data && data === managerAddress,
    managerAddress,
    mutate,
    ...rest,
  };
};
