import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest, ObservedValueOf, of, Subscription } from 'rxjs';
import {flatMap, map, take, catchError} from 'rxjs/operators';

import {DataService} from '../../shared/data/data.service';

@Component({
  selector: 'app-rxjs-demo',
  templateUrl: './rxjs-demo.component.html',
  styleUrls: ['./rxjs-demo.component.css']
})
export class RxjsDemoComponent implements OnInit {

  status: {[key:string]: string};
  priority: {[key:string]: string};
  task: {[key:string]: string};
  isErrorOccuredGettingTask = false; 
  statusSusbcription: Subscription;
  prioritySusbcription: Subscription;
  taskDetailsSusbcription: Subscription;
  
  
  task$: Observable<{[key:string]: string} | {isErrorOccuredGettingTask: boolean}>
  status$: Observable<{[key:string]: string}>
  priority$: Observable<{[key:string]: string}>
  statusPriority$: Observable<[ObservedValueOf< Observable<{[key:string]: string}>>, ObservedValueOf< Observable<{[key:string]: string}>>]>


  constructor(private dataService: DataService) { }

  ngOnInit() {
   
    this.doItImperative();
    this.doItReactiveWay();
  }

  doItImperative() {
    this.statusSusbcription = this.dataService.getStatus().pipe(take(1)).subscribe((data) => {
      this.status = data;
    });
    this.statusSusbcription = this.dataService.getPriority().pipe(take(1)).subscribe((data) => {
      this.priority = data;
    });
    this.getTaskDetailsImperativeStyle();
  }

  getTaskDetailsImperativeStyle() {

    this.taskDetailsSusbcription = this.dataService.getTask().pipe(
      map((data : any) =>{
        // this hopes status and priority data will be avaialble
        data.status = this.status[data.status];
        data.priority = this.priority[data.priority];
        return data;
      })
    ).subscribe(data=>{
      this.task= data;
    },error=>{

      this.isErrorOccuredGettingTask= true;
    })
  }

  doItReactiveWay() {

    this.status$ =  this.dataService.getStatus();
    this.priority$ = this.dataService.getPriority();
    this.statusPriority$ = combineLatest(this.status$,this.priority$);
    this.getTaskDetailsReactiveWay();
  }

  getTaskDetailsReactiveWay() {

      this.task$ = this.statusPriority$.pipe(flatMap((data ) => {
        const [status, priority] = [...data];
        return this.dataService.getTask().pipe(
        // you can pass this map logic to service as well
        map((data : any) => {
          // this is the place where i do the mapping. 
          data.status = status[data.statusCode];
          data.priority = priority[data.priorityCode];
          return data;
        }),catchError(error=> {

          return of({isErrorOccuredGettingTask: true})
        })
      )
      }))  
    }
}
