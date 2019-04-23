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
import { FooterComponent } from "./components/footer/footer.component";
import { SocielComponent } from "./components/footer/sociel/sociel.component";
import { CregisterComponent } from "./components/auth/customer/register/cregister/cregister.component";
import { CloginComponent } from "./components/auth/customer/login/clogin/clogin.component";
import { MapComponent } from "./components/contact/map/map.component";
import { TodoComponent } from "./components/todo/todo.component";

import { ConfigService } from "./config.service";
import { AdminheaderComponent } from './components/auth/admin/adminheader/adminheader.component';
import { DetailsComponent } from './components/contact/details/details.component';
import { CheckAvailabilityComponent } from './components/check-availability/check-availability.component';
import { WhyUsComponent } from './components/why-us/why-us.component';

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
    FooterComponent,
    SocielComponent,
    CregisterComponent,
    CloginComponent,
    MapComponent,
    TodoComponent,
    AdminheaderComponent,
    DetailsComponent,
    CheckAvailabilityComponent,
    WhyUsComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {}
