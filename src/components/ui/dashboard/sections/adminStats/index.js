import React from "react";
import Card from "../../../common/card/index";

import { ReactComponent as EntriesImg } from "../../../../../images/entries.svg";
import { ReactComponent as PlayersImg } from "../../../../../images/players.svg";
import { ReactComponent as JackpotImg } from "../../../../../images/jackpot.svg";
import { ReactComponent as ProfitImg } from "../../../../../images/profit.svg";

const AdminStats = () => {
  return (
    <section className="text-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      <Card image={<EntriesImg />} display={11} description={"Entries"} />
      <Card image={<PlayersImg />} display={4} description={"Players"} />
      <Card
        image={<JackpotImg />}
        display={"3.2 ETH"}
        description={"Jackpot"}
      />
      <Card image={<ProfitImg />} display={"0.1 ETH"} description={"Profit"} />
    </section>
  );
};

export default AdminStats;
