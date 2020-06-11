import { Analyzer } from "../Summary";
import { matchedData } from "../matchedData";
import { matchResults } from "../matchResult";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: matchedData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === "Man United" && match[5] === matchResults.HomeWin) {
        wins++;
      } else if (
        match[2] === "Man United" &&
        match[5] === matchResults.AwayWin
      ) {
        wins++;
      }
    }

    return `Team ${this.team} wond ${wins} games`;
  }
}
