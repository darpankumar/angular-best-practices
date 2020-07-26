import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


import {DataService} from './../../shared/data/data.service';
import {DatePickerComponent} from './../../shared/date-picker/date-picker.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customer$ : Observable<string[]>;
  selectedCustomer: string;
  component: DatePickerComponent;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.customer$ = this.dataService.getCustomers();
  }

  selectCustomer($event) {

    this.selectedCustomer = $event;
  }

}
