import { matchedData } from "./matchedData";
import { match } from "assert";

export interface Analyzer {
  run(matches: matchedData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyser: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrint(matches: matchedData[]): void {
    const output = this.analyser.run(matches);
    this.outputTarget.print(output);
  }
}
