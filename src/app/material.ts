import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule
} from "@angular/material";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
<<<<<<< HEAD
import {MatIconModule} from '@angular/material/icon';

=======
import { MatCardModule } from "@angular/material/card";
>>>>>>> f2bec672c4ed0f939570709fa555238fb19e2a80
import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
<<<<<<< HEAD
    MatIconModule
=======
    MatCardModule
>>>>>>> f2bec672c4ed0f939570709fa555238fb19e2a80
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
<<<<<<< HEAD
    MatIconModule
=======
    MatCardModule
>>>>>>> f2bec672c4ed0f939570709fa555238fb19e2a80
  ]
})
export class MaterialModule {
  hide = true;
}
