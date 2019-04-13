import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { CorouselComponent } from './components/corousel/corousel.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { AuthComponent } from './components/auth/auth.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CorouselComponent,
    RoomsComponent,
    AuthComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
