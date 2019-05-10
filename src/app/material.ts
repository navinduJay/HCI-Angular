import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule
} from "@angular/material";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MatDatepickerModule } from "@angular/material/datepicker";
import {MatIconModule} from '@angular/material/icon';

import { MatCardModule } from "@angular/material/card";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatIconModule,
    MatCardModule
  ]
})
export class MaterialModule {
  hide = true;
}
