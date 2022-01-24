import { useEffect } from "react";
import useSWR from "swr";

// Consider hashing the manager function on contract
// it is now 2nd ganache account
const managerAddresses = {
  "0x8e49d7d2d6b684aa17a5cfbe145350f65f87056e50cf6621b2c7112cd1c76d76": true,
};

// 0x4DA5635B18E32974098DB1D194679C4a86aa7Ae5

// const managerAddress = await web3Api.contract.manager.call();

export const handler = (web3, provider) => () => {
  const { data, mutate, ...rest } = useSWR(
    () => (web3 ? "web3/accounts" : null),
    async () => {
      const accounts = await web3.eth.getAccounts();
      return accounts[0];
    }
  );

  useEffect(() => {
    provider &&
      provider.on("accountsChanged", (accounts) => mutate(accounts[0] ?? null));
  }, [provider]);

  return {
    account: {
      data,
      isAdmin: (data && managerAddresses[web3.utils.keccak256(data)]) ?? false,
      mutate,
      ...rest,
    },
  };
};
