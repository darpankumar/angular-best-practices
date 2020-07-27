import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {


  getDummyData() {

    return of([{id:1,name:'Allen'}, {id:2, name:'musk'}, {id:3,name: 'ram'}, {id:4, name:'sham'}]);
  }

  geUpdateData() {

    return of([{id:1,name:'Allen'}, {id:2, name:'musk'}, {id:3,'name': 'ram'}, {id:4, name:'sham'}, {id:5, name: 'babu rao'}])
  }
}
