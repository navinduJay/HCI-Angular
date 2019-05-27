import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material";
import { AppComponent } from "./app.component";
import { CorouselComponent } from "./components/corousel/corousel.component";
import { RoomsComponent } from "./components/rooms/rooms.component";
import { AuthComponent } from "./components/auth/auth.component";

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
import { UpdateComponent } from "./components/auth/admin/edit-profile/update/update.component";
import { ReserveComponent } from "./components/corousel/reserve/reserve.component";
import { RoomTypesComponent } from "./components/admin-dashboard/admin-content/h-config/room-types/room-types.component";

import { RoomListComponent } from "./components/reservation/room-list/room-list.component";
import { RoomDescriptionComponent } from "./components/reservation/room-description/room-description.component";
import { AmenitiesComponent } from "./components/admin-dashboard/admin-content/h-config/amenities/amenities.component";
import { AdminRoomsComponent } from "./components/admin-dashboard/admin-content/h-config/admin-rooms/admin-rooms.component";
import { AnalyticsComponent } from "./components/admin-dashboard/admin-content/analytics/analytics.component";
import { SearchComponent } from "./components/admin-dashboard/admin-content/search/search.component";
import { HousekeepingComponent } from "./components/admin-dashboard/admin-content/h-config/housekeeping/housekeeping.component";
import { HallTypesComponent } from "./components/admin-dashboard/admin-content/h-config/hall-types/hall-types.component";
import { HallsComponent } from "./components/admin-dashboard/admin-content/h-config/halls/halls.component";
import { HallsAnalyticsComponent } from "./components/admin-dashboard/admin-content/analytics/halls-analytics/halls-analytics.component";

import { HousekeepingMenuComponent } from "./components/admin-dashboard/admin-content/h-config/housekeeping/housekeeping-menu/housekeeping-menu.component";

import { SingleBookingComponent } from "./components/admin-dashboard/admin-content/bookings/single-booking/single-booking.component";
import { MultiStepFormComponent } from "./components/admin-dashboard/admin-content/bookings/single-booking/multi-step-form/multi-step-form.component";
import { PaymentComponent } from "./components/admin-dashboard/admin-content/bookings/single-booking/multi-step-form/payment/payment.component";
import { RoomConfirmComponent } from "./components/admin-dashboard/admin-content/bookings/single-booking/multi-step-form/room-confirm/room-confirm.component";
import { HousekeeingHallsComponent } from "./components/admin-dashboard/admin-content/h-config/housekeeping/housekeeping_menu/housekeeing-halls/housekeeing-halls.component";
import { ForgotPasswordComponent } from "./components/auth/customer/forgot-password/forgot-password.component";
import { ProfileComponent } from "./components/auth/customer/profile/profile.component";
import { EditUserProfileComponent } from "./components/auth/customer/profile/edit-user-profile/edit-user-profile.component";
import { AuthenticationGuard } from "./authentication.guard";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { BookedRoomsComponent } from "./components/admin-dashboard/admin-content/bookings/booked-rooms/booked-rooms.component";
import { BookedHallsComponent } from "./components/admin-dashboard/admin-content/bookings/booked-halls/booked-halls.component";
import { DiscountsComponent } from "./components/admin-dashboard/admin-content/bookings/discounts/discounts.component";
import { GuestAnalyticsComponent } from "./components/admin-dashboard/admin-content/analytics/guest-analytics/guest-analytics.component";

import { FlatpickrModule } from "angularx-flatpickr";
import { CalendarModule, DateAdapter } from "angular-calendar";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { CusPaymentComponent } from "./components/cus-payment/cus-payment.component";
import { AccessDeniedComponent } from "./components/access-denied/access-denied.component";
import { AddMenuItemsComponent } from "./components/admin-dashboard/admin-content/menus/add-menu-items/add-menu-items.component";
import { ViewMenuComponent } from "./components/admin-dashboard/admin-content/menus/view-menu/view-menu.component";
import { PreviousReservationsComponent } from "./components/auth/customer/profile/previous-reservations/previous-reservations.component";
import { UserAccessDeniedComponent } from "./components/user-access-denied/user-access-denied.component";
import { OffersComponent } from "./components/offers/offers.component";
import { InvoiceComponent } from "./components/invoice/invoice.component";
import { RoomTypesBarComponent } from "./components/reservation/room-types-bar/room-types-bar.component";
import { RoomSearchComponent } from "./components/reservation/room-search/room-search.component";
import { HallDetailsComponent } from "./components/reservation/hall-details/hall-details.component";
import { CustomerMenuComponent } from './components/customer-menu/customer-menu/customer-menu.component';
@NgModule({
  declarations: [
    AppComponent,
    CorouselComponent,
    RoomsComponent,
    AuthComponent,
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
    ReserveComponent,
    RoomTypesComponent,
    RoomListComponent,
    RoomDescriptionComponent,
    AmenitiesComponent,
    AdminRoomsComponent,
    AnalyticsComponent,
    SearchComponent,
    HousekeepingComponent,
    HallTypesComponent,
    HallsComponent,
    HallsAnalyticsComponent,
    HousekeepingMenuComponent,
    HousekeeingHallsComponent,
    SingleBookingComponent,
    MultiStepFormComponent,
    PaymentComponent,
    RoomConfirmComponent,
    ForgotPasswordComponent,
    ProfileComponent,
    EditUserProfileComponent,
    BookedRoomsComponent,
    BookedHallsComponent,
    DiscountsComponent,
    GuestAnalyticsComponent,
    CusPaymentComponent,
    AccessDeniedComponent,
    AddMenuItemsComponent,
    ViewMenuComponent,
    PreviousReservationsComponent,
    UserAccessDeniedComponent,
    OffersComponent,
    InvoiceComponent,
    RoomTypesBarComponent,
    RoomSearchComponent,
    HallDetailsComponent,
    CustomerMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModalModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],

  providers: [ConfigService, AuthenticationGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
