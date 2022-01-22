import { Line } from "rc-progress";
import ReactTooltip from "react-tooltip";
import Button from "../../common/button";

export default function AdminControls() {
  let percentComplete = 74;

  return (
    <section className="flex flex-col items-center gap-5">
      <Line
        className="rounded-md"
        percent={`${percentComplete}`}
        strokeWidth="0.5"
        strokeColor="#037DD6"
        trailColor="#5117A7"
        data-tip={`${percentComplete}%`}
      />
      <Button text={"Payout Loattery"} />
      <ReactTooltip />
    </section>
  );
}
