import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AppRoute } from '../../app.routes';

@Component({
  selector: 'app-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterModule],
})
export class BottomBarComponent {
  @Input()
  public menuItems: AppRoute[] = [];
}
