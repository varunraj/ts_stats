"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var WinsAnalysis_1 = require("./analysers/WinsAnalysis");
var Summary_1 = require("./Summary");
var csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis("Man United"), new ConsoleReport_1.ConsoleReport());
var summaryHtml = Summary_1.Summary.winsAnalysisWithHtmlReport("Man United");
//
summary.buildAndPrint(matchReader.matches);
summaryHtml.buildAndPrint(matchReader.matches);
