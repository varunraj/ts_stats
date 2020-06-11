import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { matchResults } from "./matchResult";
import { match } from "assert";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === "Man United" && match[5] === matchResults.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === matchResults.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United wins ${manUnitedWins}`);
