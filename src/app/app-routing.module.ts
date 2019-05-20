import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/auth/admin/login/login.component";
import { AppComponent } from "./app.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { RegisterComponent } from "./components/auth/admin/register/register.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HomeComponent } from "./components/home/home.component";
import { CregisterComponent } from "./components/auth/customer/register/cregister/cregister.component";
import { CloginComponent } from "./components/auth/customer/login/clogin/clogin.component";
import { AdminDashboardComponent } from "./components/admin-dashboard/admin-dashboard.component";
import { HConfigComponent } from "./components/admin-dashboard/admin-content/h-config/h-config.component";
import { BookingsComponent } from "./components/admin-dashboard/admin-content/bookings/bookings.component";
import { MenusComponent } from "./components/admin-dashboard/admin-content/menus/menus.component";
import { GuestsComponent } from "./components/admin-dashboard/admin-content/guests/guests.component";
import { CmsComponent } from "./components/admin-dashboard/admin-content/cms/cms.component";
import { CalendarComponent } from "./components/admin-dashboard/admin-content/calendar/calendar.component";
import { EditProfileComponent } from "./components/auth/admin/edit-profile/edit-profile.component";
import { UpdateComponent } from "./components/auth/admin/edit-profile/update/update.component";
import { RoomTypesComponent } from "./components/admin-dashboard/admin-content/h-config/room-types/room-types.component";
import { RoomListComponent } from "./components/reservation/room-list/room-list.component";
import { RoomDescriptionComponent } from "./components/reservation/room-description/room-description.component";
import { AmenitiesComponent } from "./components/admin-dashboard/admin-content/h-config/amenities/amenities.component";
import { RoomsComponent } from "./components/rooms/rooms.component";
import { AdminRoomsComponent } from "./components/admin-dashboard/admin-content/h-config/admin-rooms/admin-rooms.component";
import { HousekeepingComponent } from "./components/admin-dashboard/admin-content/h-config/housekeeping/housekeeping.component";
import { HallTypesComponent } from "./components/admin-dashboard/admin-content/h-config/hall-types/hall-types.component";
import { HallsComponent } from "./components/admin-dashboard/admin-content/h-config/halls/halls.component";
import { HousekeepingMenuComponent } from "./components/admin-dashboard/admin-content/h-config/housekeeping/housekeeping-menu/housekeeping-menu.component";
import { HousekeeingHallsComponent } from "./components/admin-dashboard/admin-content/h-config/housekeeping/housekeeping_menu/housekeeing-halls/housekeeing-halls.component";
import { SingleBookingComponent } from "./components/admin-dashboard/admin-content/bookings/single-booking/single-booking.component";
import { PaymentComponent } from "./components/admin-dashboard/admin-content/bookings/single-booking/multi-step-form/payment/payment.component";
import { RoomConfirmComponent } from "./components/admin-dashboard/admin-content/bookings/single-booking/multi-step-form/room-confirm/room-confirm.component";
import { ForgotPasswordComponent } from "./components/auth/customer/forgot-password/forgot-password.component";
import { ProfileComponent } from "./components/auth/customer/profile/profile.component";
import { EditUserProfileComponent } from "./components/auth/customer/profile/edit-user-profile/edit-user-profile.component";
import { AuthenticationGuard } from "./authentication.guard";
import { AdminAuthenticationGuard } from "./admin.authentication.guard";
import { BookedRoomsComponent } from "./components/admin-dashboard/admin-content/bookings/booked-rooms/booked-rooms.component";
import { BookedHallsComponent } from "./components/admin-dashboard/admin-content/bookings/booked-halls/booked-halls.component";
import { DiscountsComponent } from "./components/admin-dashboard/admin-content/bookings/discounts/discounts.component";
import { CusPaymentComponent } from "./components/cus-payment/cus-payment.component";
import { AccessDeniedComponent } from "./components/access-denied/access-denied.component";
import { AddMenuItemsComponent } from "./components/admin-dashboard/admin-content/menus/add-menu-items/add-menu-items.component";
import { ViewMenuComponent } from "./components/admin-dashboard/admin-content/menus/view-menu/view-menu.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "admin/login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "contact", component: ContactComponent },
  { path: "admin/register", component: RegisterComponent },
  { path: "user/register", component: CregisterComponent },
  { path: "user/login", component: CloginComponent },
  { path: "admin/edit_profile", component: EditProfileComponent },
  {
    path: "admin/dashboard",
    component: AdminDashboardComponent,
    data: { animation: "isLeft" },
    canActivate: [AdminAuthenticationGuard]
  },
  {
    path: "admin/dashboard/h_config",
    component: HConfigComponent,
    data: { animation: "isRight" },
    canActivate: [AdminAuthenticationGuard]
  },
  {
    path: "admin/dashboard/h_config/room_types",
    component: RoomTypesComponent,
    data: { animation: "isLeft" },
    canActivate: [AdminAuthenticationGuard]
  },

  {
    path: "admin/dashboard/bookings",
    component: BookingsComponent,
    canActivate: [AdminAuthenticationGuard]
  },
  {
    path: "admin/dashboard/menus",
    component: MenusComponent,
    canActivate: [AdminAuthenticationGuard]
  },
  {
    path: "admin/dashboard/guests",
    component: GuestsComponent,
    canActivate: [AdminAuthenticationGuard]
  },
  {
    path: "admin/dashboard/cms",
    component: CmsComponent,
    canActivate: [AdminAuthenticationGuard]
  },
  {
    path: "admin/dashboard/calendar",
    component: CalendarComponent,
    canActivate: [AdminAuthenticationGuard]
  },
  {
    path: "admin/update",
    component: UpdateComponent,
    canActivate: [AdminAuthenticationGuard],
    data: { animation: "isRight" }
  },
  {
    path: "user/reservation/room-list",
    component: RoomListComponent,
    canActivate: [AdminAuthenticationGuard]
  },
  {
    path: "user/reservation/room-list/desc",
    component: RoomDescriptionComponent
  },
  {
    path: "admin/dashboard/h_config/amenities",
    component: AmenitiesComponent,
    canActivate: [AdminAuthenticationGuard],
    data: { animation: "isLeft" }
  },
  {
    path: "admin/dashboard/h_config/rooms",
    component: AdminRoomsComponent,
    canActivate: [AdminAuthenticationGuard],
    data: { animation: "isLeft" }
  },
  {
    path: "admin/dashboard/h_config/housekeeping",
    component: HousekeepingComponent,
    canActivate: [AdminAuthenticationGuard],
    data: { animation: "isRight" }
  },
  {
    path: "admin/dashboard/h_config/hall_types",
    component: HallTypesComponent,
    canActivate: [AdminAuthenticationGuard],
    data: { animation: "isLeft" }
  },
  {
    path: "admin/dashboard/h_config/hall",
    component: HallsComponent,
    canActivate: [AdminAuthenticationGuard],
    data: { animation: "isLeft" }
  },
  {
    path: "admin/dashboard/h_config/housekeeping_menu",
    component: HousekeepingMenuComponent,
    canActivate: [AdminAuthenticationGuard],
    data: { animation: "isLeft" }
  },
  {
    path: "admin/dashboard/h_config/housekeeping_menu/housekeeping_halls",
    component: HousekeeingHallsComponent,
    canActivate: [AdminAuthenticationGuard],
    data: { animation: "isRight" }
  },

  {
    path: "admin/dashboard/bookings/single_booking/payment",
    component: PaymentComponent,
    canActivate: [AdminAuthenticationGuard],
    data: { animation: "isRight" }
  },
  {
    path: "admin/dashboard/bookings/single_booking",
    component: SingleBookingComponent,
    canActivate: [AdminAuthenticationGuard]
  },
  {
    path: "admin/dashboard/bookings/single_booking/confirm_room",
    component: RoomConfirmComponent,
    canActivate: [AdminAuthenticationGuard],
    data: { animation: "isRight" }
  },

  {
    path: "user/forgot_password",
    component: ForgotPasswordComponent
  },
  {
    path: "user/profile",
    component: ProfileComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: "user/profile/edit_profile",
    component: EditUserProfileComponent,
    canActivate: [AuthenticationGuard]
  },

  {
    path: "admin/dashboard/bookings/booked_rooms",
    component: BookedRoomsComponent,
    canActivate: [AdminAuthenticationGuard],
    data: { animation: "isRight" }
  },
  {
    path: "admin/dashboard/bookings/booked_halls",
    component: BookedHallsComponent,
    canActivate: [AdminAuthenticationGuard],
    data: { animation: "isRight" }
  },
  {
    path: "admin/dashboard/bookings/checkout",
    component: DiscountsComponent,
    canActivate: [AdminAuthenticationGuard],
    data: { animation: "isLeft" }
  },
  {
    path: "admin/dashboard/menu/add_items",
    component: AddMenuItemsComponent,
    canActivate: [AdminAuthenticationGuard],
    data: { animation: "isLeft" }
  },
  {
    path: "admin/dashboard/menu/view_menu",
    component: ViewMenuComponent,
    canActivate: [AdminAuthenticationGuard],
    data: { animation: "isLeft" }
  },

  {
    path: "user/payment",
    component: CusPaymentComponent
  },
  {
    path: "access",
    component: AccessDeniedComponent
  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
