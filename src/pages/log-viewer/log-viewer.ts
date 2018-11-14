import { Subscription } from 'rxjs/Subscription';
import { ObservableLogWriter } from './ObservableLogWriter';
import { LogLevel } from 'dotup-ts-logger';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LogEntry } from 'dotup-ts-logger';
import { setInterval } from 'timers';

/**
 * Generated class for the LogViewerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-log-viewer',
  templateUrl: 'log-viewer.html',
})
export class LogViewerPage {

  public searchString: string;

  listItems: Array<LogEntry>;
  subscription: Subscription;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    observableLogWriter: ObservableLogWriter
  ) {
    this.listItems = new Array<LogEntry>();
    // this.itemsSubject = new Subject<Array<LogEntry>>();
    // this.listItems = this.itemsSubject.asObservable();
    this.subscription = observableLogWriter.entry.subscribe(newEntry => {
      this.listItems.unshift(newEntry);
    });
  }

  
  onSearchStringChanged(value) {
    if(value === undefined){
      return;
    }
    if(value === null){
      return;
    }
    this.searchString = value;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogViewerPage');
    // setInterval((value) => {
    //   const newLog = new LogEntry(LogLevel.Debug, value, 'context');
    //   newLog.timeStamp = new Date(Date.now()).toISOString();
    //   this.entries.push(newLog);
    //   this.itemsSubject.next(this.entries);
    // }, 1000);
  }

  ionViewDidLeave() {
    this.subscription.unsubscribe();
    // this.itemsSubject.unsubscribe();
  }
}
