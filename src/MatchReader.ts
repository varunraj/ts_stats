import { CsvFileReader } from "./CsvFileReader";
import { dateStringtoDate } from "./utils";
import { matchResults } from "./matchResult";
type matchedData = [Date, string, string, number, number, matchResults, string];

export class MatchReader extends CsvFileReader<matchedData> {
  mapRow(row: string[]): matchedData {
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
}
