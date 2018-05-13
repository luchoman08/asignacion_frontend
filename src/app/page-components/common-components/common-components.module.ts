import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleDataDialogEditOrAddComponent } from './';
import { FormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatDialogModule,
  MatInputModule,
  MatButtonModule,
  MatButtonToggleModule,
} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule
  ],
  declarations: [
    SingleDataDialogEditOrAddComponent
  ],
  entryComponents: [
    SingleDataDialogEditOrAddComponent
  ]
})
export class CommonComponentsModule { }
