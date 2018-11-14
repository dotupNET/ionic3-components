import { LogEntry } from 'dotup-ts-logger';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterLogEntry',
})
export class FilterLogEntryPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(items: LogEntry[], find: string) {
    if (!items) return [];
    if (!find) return items;
    if (find === "") return items;
    find = find.toLowerCase();
    return items.filter(item => {
      if( item.context.toLowerCase().includes(find)){
        return true;
      }
      if( item.memberName.toLowerCase().includes(find)){
        return true;
      }
      if( item.message.toLowerCase().includes(find)){
        return true;
      }
      if( item.LogLevel.toLowerCase().includes(find)){
        return true;
      }
      return false;
    });
  }
}