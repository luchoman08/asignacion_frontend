import { Component, OnInit, Input } from '@angular/core';
import { SimpleDeveloper } from '../../../core/models';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {
  SingleDataDialogEditOrAddComponent 
} from '../../../page-components/common-components/single-data-dialog-edit-or-add/single-data-dialog-edit-or-add.component';
import { CapitalizePipe } from '../../../core/pipes/capitalize.pipe';

@Component({
  selector: 'app-simple-developer-list-one-line',
  templateUrl: './simple-developer-list-one-line.component.html',
  styleUrls: ['./simple-developer-list-one-line.component.scss']

})
export class SimpleDeveloperListOneLineComponent implements OnInit {
  @Input() simpleDevelopers: SimpleDeveloper[];
  constructor(
    public dialog: MatDialog,
  ) { }
  ngOnInit() {
  }
  openEditAvailableHoursPerWeekDialog(simpleDeveloper: SimpleDeveloper): void {
    const dialogRef = this.dialog.open(SingleDataDialogEditOrAddComponent, {
      width: '320px',
      data: {
        value: simpleDeveloper.available_hours_per_week,
        valueName: 'horas disponibles a la semana',
        type: 'number'}
    });
    dialogRef.afterClosed().subscribe(value => {
      simpleDeveloper.available_hours_per_week = value;
    });
  }


}