import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { HistoryComponent } from './history.component';

@NgModule({
  declarations: [HistoryComponent],
  imports: [CommonModule, HeaderComponent],
})
export class HistoryModule {}
