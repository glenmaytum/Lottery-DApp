const manipulateAddresses = (allAddresses) => {
  let _allAddresses = [...allAddresses];
  let uniqueAddressesAndTimesEntered = Object.entries(
    _allAddresses.reduce(
      (acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc),
      {}
    )
  );
  let jackpot = roundNumber(
    uniqueAddressesAndTimesEntered.reduce((prev, next) => prev + next[1], 0) *
      0.1
  );
  let players = uniqueAddressesAndTimesEntered.length;
  let totalEntries = _allAddresses.length;
  let profit = Number((jackpot * 0.05).toFixed(3));
  let individualEntryData = uniqueAddressesAndTimesEntered.map((entry) => {
    const address = entry[0];
    const timesEntered = entry[1];
    const ethWagered = roundNumber(timesEntered * 0.1);
    const chanceOfWin = Number(((ethWagered * 100) / jackpot).toFixed(1));
    const roundedChanceOfWin = roundNumber(chanceOfWin);

    return {
      address,
      timesEntered,
      ethWagered,
      roundedChanceOfWin,
    };
  });

  return {
    jackpot,
    totalEntries,
    players,
    profit,
    individualEntryData,
  };
};

export default manipulateAddresses;

function roundNumber(numberToRound, decimalPlaces) {
  return Math.round(numberToRound * 100) / 100;
}
