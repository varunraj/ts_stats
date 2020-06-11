import { matchedData } from "./matchedData";
import { match } from "assert";
import { WinsAnalysis } from "./analysers/WinsAnalysis";
import { HtmlReports } from "./reportTargets/HtmlsReports";

export interface Analyzer {
  run(matches: matchedData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReports());
  }

  constructor(public analyser: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrint(matches: matchedData[]): void {
    const output = this.analyser.run(matches);
    this.outputTarget.print(output);
  }
}
