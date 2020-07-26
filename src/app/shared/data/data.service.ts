import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getCustomers() :Observable<string[]> {

    return of(['allen','musk','raj','amit'])
  }

  getStatus(): Observable<{[key:string]: string}> {

    return of({'001': 'new','002':'in-progress','003':'review','004':'done'})
  }

  getPriority(): Observable<{[key:string]: string}> {

    return of({'001': 'low','002':'medium','003':'high'})
  }

  getTask(): Observable<{[key:string]: string}> {
    return of({name: 'some task',status:'001',priority:'003'})

  }
}
