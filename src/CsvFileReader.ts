import fs from "fs";
import { dateStringtoDate } from "./utils";
import { matchResults } from "./matchResult";

type matchedData = [Date, string, string, number, number, matchResults, string];

export class CsvFileReader {
  data: matchedData[] = [];
  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(
        (row: string[]): matchedData => {
          return [
            dateStringtoDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as matchResults, // 'H','A','D'
            row[6],
          ];
        }
      );
  }
}
