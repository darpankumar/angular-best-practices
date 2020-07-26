import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {

  @Input() items:  string[];
  @Output() itemSelected: EventEmitter<string> = new EventEmitter();

  selectItem(item) {

    this.itemSelected.emit(item);
  }

}
