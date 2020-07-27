import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import {UtilityService} from './shared/utility/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.
})
export class AppComponent {
  title = 'demo-app';
  employees$ : Observable<{id:number, name:string}[]> 

  constructor(private utilityService: UtilityService) {

    
  }

  getData() {

    this.employees$ = this.utilityService.getDummyData();
    
  }

  getUpdateData() {

    this.employees$ = this.utilityService.geUpdateData();
  }

  trackByCustomerId(_, customer) {

    return customer.id;

  }
}
