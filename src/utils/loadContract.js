const NETWORK_ID = process.env.REACT_APP_NETWORK_ID;

// Loading contract using web3 instead of @truffle/contract
export const loadContract = async (name, web3) => {
  const res = await fetch(`/contracts/${name}.json`); //Fetching contract which is in the public folder
  const Artifact = await res.json();
  let contract = null;

  try {
    contract = new web3.eth.Contract( //takes abi from contract and network
      Artifact.abi,
      Artifact.networks[NETWORK_ID].address
    );
  } catch {
    console.log(`Contract ${name} cannot be loaded`);
  }

  return contract;
};

// WAY TO DO USING @truffle/contract package
// import contract from "@truffle/contract";

// export const loadContract = async (name, provider) => {
//   const res = await fetch(`/contracts/${name}.json`); //Fetching contract which is in the public folder
//   const Artifact = await res.json();

//   const _contract = contract(Artifact);
//   _contract.setProvider(provider);

//   let deployedContract = null;

//   try {
//     deployedContract = await _contract.deployed();
//   } catch {
//     console.log(`Contract ${name} cannot be loaded`);
//   }

//   return deployedContract;
// };
