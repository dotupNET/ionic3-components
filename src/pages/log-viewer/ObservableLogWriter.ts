import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import { ILogWriter, LogEntry, LogLevel } from "dotup-ts-logger";

export class ObservableLogWriter implements ILogWriter {

  private entrySubject: ReplaySubject<LogEntry>;

  entry: Observable<LogEntry>;

  logLevel: LogLevel;

  constructor() {
    this.entrySubject = new ReplaySubject<LogEntry>(1000);
    this.entry = this.entrySubject.asObservable();
  }
  write(entry: LogEntry): void {
    entry.timeStamp = entry.timeStamp.replace('Z','').replace('T',' ');
    this.entrySubject.next(entry);
  }

}
