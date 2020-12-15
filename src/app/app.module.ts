import { WebSocketService } from './web-socket.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MainOutputHtmlComponent } from './main-output-html/main-output-html.component';

@NgModule({
  declarations: [
    AppComponent,
    MainOutputHtmlComponent, 
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule,
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
