"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var matchResult_1 = require("./matchResult");
var csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var manUnitedWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match_1 = _a[_i];
    if (match_1[1] === "Man United" && match_1[5] === matchResult_1.matchResults.HomeWin) {
        manUnitedWins++;
    }
    else if (match_1[2] === "Man United" && match_1[5] === matchResult_1.matchResults.AwayWin) {
        manUnitedWins++;
    }
}
console.log("Man United wins " + manUnitedWins);
