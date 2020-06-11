import { dateStringtoDate } from "./utils";
import { matchResults } from "./matchResult";
type matchedData = [Date, string, string, number, number, matchResults, string];

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: matchedData[] = [];

  constructor(public reader: DataReader) {}
  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map(
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
