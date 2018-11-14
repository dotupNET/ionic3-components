import { Component, Input, Output, ViewChild, EventEmitter } from '@angular/core';

/**
 * Generated class for the FilterToolbarHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'filter-toolbar-header',
  templateUrl: 'filter-toolbar-header.html'
})
export class FilterToolbarHeaderComponent {

  @ViewChild('search') searchInput: any;

  @Input() title: string;

  @Output() onSearchStringChanged: EventEmitter<string> = new EventEmitter<string>();

  searchActive: boolean;
  _searchString: string;

  @Input()
  set searchString(value: string) {
    this._searchString = value;
    this.onSearchStringChanged.emit(value);
  }
  get searchString(): string {
    return this._searchString;
  }

  constructor() {
    // this.logger.debug('Hello FilterToolbarHeaderComponent Component');
    // this.text = 'Hello World';
  }

  public toggleSearchbar() {
    if (this.searchActive === true)
      this.searchActive = false;
    else {
      this.searchActive = true;
      setTimeout(() => {
        this.searchInput.setFocus();
      }, 550);
    }
  }

  public onSearchCancel() {
    this.searchString = "";
    this.searchActive = false;
  }

}
