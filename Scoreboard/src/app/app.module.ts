import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { CriticsComponent } from './critics/critics.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    CriticsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, CriticsComponent]
})
export class AppModule { }
