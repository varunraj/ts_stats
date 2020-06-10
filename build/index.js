"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var matches = fs_1.default
    .readFileSync("football.csv", {
    encoding: "utf-8",
})
    .split("\n")
    .map(function (row) {
    return row.split(",");
});
// Use an object to represent the outcomes of match.
// const matchResults = {
//   HomeWin: "H",
//   AwayWin: "A",
//   Draw: "D",
// };
// Use enums instead of objects
var matchResults;
(function (matchResults) {
    matchResults["HomeWin"] = "H";
    matchResults["AwayWin"] = "A";
    matchResults["Draw"] = "D";
})(matchResults || (matchResults = {}));
var manUnitedWins = 0;
for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
    var match = matches_1[_i];
    if (match[1] === "Man United" && match[5] === matchResults.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === matchResults.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United won " + manUnitedWins);
