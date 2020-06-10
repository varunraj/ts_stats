import fs from "fs";

const matches = fs
  .readFileSync("football.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",");
  });

// Use an object to represent the outcomes of match.
// const matchResults = {
//   HomeWin: "H",
//   AwayWin: "A",
//   Draw: "D",
// };

// Use enums instead of objects

enum matchResults {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === "Man United" && match[5] === matchResults.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === matchResults.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins}`);
