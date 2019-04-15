import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CorouselComponent } from "./components/corousel/corousel.component";
import { RoomsComponent } from "./components/rooms/rooms.component";
import { AuthComponent } from "./components/auth/auth.component";

import { RegisterComponent } from "./components/auth/admin/register/register.component";
import { LoginComponent } from "./components/auth/admin/login/login.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { AppRoutingModule } from "./app-routing.module";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./components/home/home.component";
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CorouselComponent,
    RoomsComponent,
    AuthComponent,
    RegisterComponent,
    NotFoundComponent,
    LoginComponent,
    AboutComponent,
    ContactComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
