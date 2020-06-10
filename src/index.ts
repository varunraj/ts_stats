import { CsvFileReader } from "./CsvFileReader";

const reader = new CsvFileReader("football.csv");
reader.read();

// Use an object to represent the outcomes of match.
// const matchResults = {
//   HomeWin: "H",
//   AwayWin: "A",
//   Draw: "D",
// };

// Use enums instead of objects

import { matchResults } from "./matchResult";

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === matchResults.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === matchResults.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United wins ${manUnitedWins}`);
