import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainOutputHtmlComponent } from './main-output-html/main-output-html.component';

@NgModule({
  declarations: [
    AppComponent,
    MainOutputHtmlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
