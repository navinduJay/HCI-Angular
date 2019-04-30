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
import { AdminheaderComponent } from "./components/auth/admin/adminheader/adminheader.component";
import { DetailsComponent } from "./components/contact/details/details.component";
import { CheckAvailabilityComponent } from "./components/check-availability/check-availability.component";
import { WhyUsComponent } from "./components/why-us/why-us.component";
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import { AdminNavComponent } from "./components/admin-dashboard/admin-nav/admin-nav.component";

import { AdminContentComponent } from "./components/admin-dashboard/admin-content/admin-content.component";
import { AdminFooterComponent } from "./components/admin-dashboard/admin-footer/admin-footer.component";
import { HConfigComponent } from "./components/admin-dashboard/admin-content/h-config/h-config.component";
import { BookingsComponent } from "./components/admin-dashboard/admin-content/bookings/bookings.component";
import { MenusComponent } from "./components/admin-dashboard/admin-content/menus/menus.component";
import { GuestsComponent } from "./components/admin-dashboard/admin-content/guests/guests.component";
import { CmsComponent } from "./components/admin-dashboard/admin-content/cms/cms.component";
import { CalendarComponent } from "./components/admin-dashboard/admin-content/calendar/calendar.component";
import { EditProfileComponent } from "./components/auth/admin/edit-profile/edit-profile.component";
import { UpdateComponent } from './components/auth/admin/edit-profile/update/update.component';
import { ReserveComponent } from './components/corousel/reserve/reserve.component';

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
    WhyUsComponent,
    AdminDashboardComponent,
    AdminNavComponent,
    AdminContentComponent,
    AdminFooterComponent,
    HConfigComponent,
    BookingsComponent,
    MenusComponent,
    GuestsComponent,
    CmsComponent,
    CalendarComponent,
    EditProfileComponent,
    UpdateComponent,
    ReserveComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule {}
