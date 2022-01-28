import { Button } from "../../../common/";
import { useWeb3 } from "../../../../providers/index";
import { useAccount } from "../../../../hooks/web3/index";

const AdminControls = () => {
  const { allContractData, contract } = useWeb3();
  const { percentComplete } = allContractData;
  const { account, managerAddress } = useAccount();

  const pickWinner = async () => {
    try {
      const result = await contract.methods.pickWinner().send({
        from: account.managerAddress,
      });
      console.log(result);
    } catch (err) {
      console.error("Dang! Operation has failed.", err);
    }
  };

  return (
    <section className="flex flex-col items-center gap-5">
      <Button disabled={percentComplete < 100} onClick={pickWinner}>
        Payout Lottery
      </Button>
    </section>
  );
};

export default AdminControls;
