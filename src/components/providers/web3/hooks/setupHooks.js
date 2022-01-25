import { handler as createAccountHook } from "./useAccount";
import { handler as createNetworkHook } from "./useNetwork";

// dependencies are provider and web3 from context
export const setupHooks = (...dependencies) => {
  // returns an object of hooks run with the provider and web3 dependencies and puts it on the "connect" property in context
  return {
    useAccount: createAccountHook(...dependencies),
    useNetwork: createNetworkHook(...dependencies),
  };
};
