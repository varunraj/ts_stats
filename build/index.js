"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var reader = new MatchReader_1.MatchReader("football.csv");
reader.read();
// Use an object to represent the outcomes of match.
// const matchResults = {
//   HomeWin: "H",
//   AwayWin: "A",
//   Draw: "D",
// };
// Use enums instead of objects
var matchResult_1 = require("./matchResult");
var manUnitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === "Man United" && match[5] === matchResult_1.matchResults.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && match[5] === matchResult_1.matchResults.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United wins " + manUnitedWins);
