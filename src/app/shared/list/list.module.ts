import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListItemComponent } from './list-item/list-item.component';
import { ListComponent } from './list.component';

@NgModule({
  declarations: [ListComponent, ListItemComponent],
  imports: [CommonModule],
  exports: [ListComponent, ListItemComponent],
  providers: [],
})
export class ListModule {}
