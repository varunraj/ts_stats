"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
var matchResult_1 = require("../matchResult");
var WinsAnalysis = /** @class */ (function () {
    function WinsAnalysis(team) {
        this.team = team;
    }
    WinsAnalysis.prototype.run = function (matches) {
        var wins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if (match[1] === "Man United" && match[5] === matchResult_1.matchResults.HomeWin) {
                wins++;
            }
            else if (match[2] === "Man United" &&
                match[5] === matchResult_1.matchResults.AwayWin) {
                wins++;
            }
        }
        return "Team " + this.team + " wond " + wins + " games";
    };
    return WinsAnalysis;
}());
exports.WinsAnalysis = WinsAnalysis;
