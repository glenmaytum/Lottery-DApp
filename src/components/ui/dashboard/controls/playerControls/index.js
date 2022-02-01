import { Button } from "../../../common";
import { useWeb3 } from "../../../../providers";
import { useAccount } from "../../../../hooks/web3";

const PlayerControls = () => {
  const { contract, web3 } = useWeb3();
  const { account } = useAccount();
  const enterLottery = async () => {
    await web3.eth.sendTransaction({
      from: account.data,
      to: contract._address,
      value: web3.utils.toWei("0.1", "ether"),
    });
  };

  return (
    <section className="flex flex-col items-center gap-5">
      <Button onClick={enterLottery}>Enter Lottery</Button>
    </section>
  );
};

export default PlayerControls;
