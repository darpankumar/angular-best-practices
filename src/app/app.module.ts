import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { CustomerDetailsComponent } from './components/customer-details/customer-details.component';
import { ClutterHomeComponent } from './components/clutter-home/clutter-home.component';
import { RxjsDemoComponent } from './components/rxjs-demo/rxjs-demo.component';
import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    CustomerDetailsComponent,
    ClutterHomeComponent,
    RxjsDemoComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
