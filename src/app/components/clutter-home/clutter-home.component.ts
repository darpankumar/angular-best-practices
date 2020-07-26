import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {DataService} from '../../shared/data/data.service';

@Component({
  selector: 'app-clutter-home',
  templateUrl: './clutter-home.component.html',
  styleUrls: ['./clutter-home.component.css']
})
export class ClutterHomeComponent implements OnInit {
  customer$ : Observable<string[]>;
  selectedCustomer: string;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.customer$ = this.dataService.getCustomers();
    
  }

  selectCustomer($event) {

    this.selectedCustomer = $event;
  }

}
