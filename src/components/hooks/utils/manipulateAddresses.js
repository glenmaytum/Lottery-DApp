import { useState, useMemo, useEffect } from "react";
import { useWeb3 } from "../../providers";

const manipulateAddresses = (allAddresses) => {
  let _allAddresses = [...allAddresses];
  let uniqueAddressesAndTimesEntered = Object.entries(
    _allAddresses.reduce(
      (acc, curr) => ((acc[curr] = (acc[curr] || 0) + 1), acc),
      {}
    )
  );
  let jackpot = roundNumber(
    uniqueAddressesAndTimesEntered.reduce((prev, next) => prev + next[1], 0)
  );
  let players = uniqueAddressesAndTimesEntered.length;
  let totalEntries = _allAddresses.length;
  let profit = (jackpot * 0.05).toFixed(3);
  let individualEntryData = uniqueAddressesAndTimesEntered.map((entry) => {
    const address = entry[0];
    const timesEntered = entry[1];
    const ethWagered = roundNumber(timesEntered * 0.1);
    const chanceOfWin = (ethWagered * 100) / jackpot;
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
