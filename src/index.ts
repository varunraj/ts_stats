import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReports } from "./reportTargets/HtmlsReports";
import { WinsAnalysis } from "./analysers/WinsAnalysis";
import { Summary } from "./Summary";

const csvFileReader = new CsvFileReader("football.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinsAnalysis("Man United"),
  new ConsoleReport()
);

const summaryHtml = Summary.winsAnalysisWithHtmlReport("Man United");
//
summary.buildAndPrint(matchReader.matches);
summaryHtml.buildAndPrint(matchReader.matches);
