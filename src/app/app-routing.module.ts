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
    data: { animation: "isLeft" }
  },
  {
    path: "admin/dashboard/h_config",
    component: HConfigComponent,
    data: { animation: "isRight" }
  },
  {
    path: "admin/dashboard/h_config/room_types",
    component: RoomTypesComponent,
    data: { animation: "isRight" }
  },

  { path: "admin/dashboard/bookings", component: BookingsComponent },
  { path: "admin/dashboard/menus", component: MenusComponent },
  { path: "admin/dashboard/guests", component: GuestsComponent },
  { path: "admin/dashboard/cms", component: CmsComponent },
  { path: "admin/dashboard/calendar", component: CalendarComponent },
  {
    path: "admin/update",
    component: UpdateComponent,
    data: { animation: "isRight" }
  },
  { path: "user/reservation/room-list", component: RoomListComponent },
  {
    path: "user/reservation/room-list/desc",
    component: RoomDescriptionComponent
  },
  {
    path: "admin/dashboard/h_config/amenities",
    component: AmenitiesComponent,
    data: { animation: "isRight" }
  },
  {
    path: "admin/dashboard/h_config/rooms",
    component: AdminRoomsComponent,
    data: { animation: "isRight" }
  },
  {
    path: "admin/dashboard/h_config/housekeeping",
    component: HousekeepingComponent,
    data: { animation: "isRight" }
  },

  { path: "**", component: NotFoundComponent }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
