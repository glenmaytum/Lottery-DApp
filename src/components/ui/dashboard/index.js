import React from "react";
import Card from "../../common/cards";
import { ReactComponent as EntriesImg } from "../../../images/entries.svg";
import { ReactComponent as PlayersImg } from "../../../images/players.svg";
import { ReactComponent as JackpotImg } from "../../../images/jackpot.svg";
import { ReactComponent as ProfitImg } from "../../../images/profit.svg";

export default function Dashboard() {
  return (
    <main className="container mx-auto px-6 py-8">
      <h3 className="text-gray-700 text-3xl font-medium">Dashboard</h3>
      <section class="text-gray-500 body-font flex flex-wrap -m-4 text-center">
        {/* <ProfitImg /> */}
        <Card image={<EntriesImg />} display={11} description={"Entries"} />
        <Card image={<PlayersImg />} display={4} description={"Players"} />
        <Card
          image={<JackpotImg />}
          display={"3.2 ETH"}
          description={"Jackpot"}
        />
        <Card
          image={<ProfitImg />}
          display={"0.1 ETH"}
          description={"Profit"}
        />
      </section>
    </main>
  );
}
