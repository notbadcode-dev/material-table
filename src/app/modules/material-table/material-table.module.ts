import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { MaterialTableComponent } from './material-table.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MaterialTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    DragDropModule,
    MatSortModule,
    MatCheckboxModule,
  ],
  exports: [MaterialTableComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class MaterialTableModule {}
