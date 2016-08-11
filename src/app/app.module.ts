import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {HttpModule} from "@angular/http";
import {MdCardModule} from "@angular2-material/card";
import {MdButtonModule} from "@angular2-material/button";
import {MdIconModule} from "@angular2-material/icon";
import {SampleComponent} from "./sample/sample.component";

@NgModule({
  declarations: [
    AppComponent,
    SampleComponent
  ],
  providers: [],
  imports:      [
    BrowserModule,
    HttpModule,
    MdCardModule,
    MdButtonModule,
    MdIconModule
  ],
  bootstrap:    [AppComponent],
})
export class AppModule {}
