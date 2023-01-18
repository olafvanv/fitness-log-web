import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IHeaderIconButton } from './models/header-icon-button.interface';
import { IHeaderTextButton } from './models/header-text-button.interface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class HeaderComponent {
  @Input()
  public pageTitle: string | null = null;

  @Input()
  public showBackButton: boolean = false;

  @Input()
  public leftTextButton!: IHeaderTextButton;

  @Input()
  public rightTextButton!: IHeaderTextButton;

  @Input()
  public rightIconButton!: IHeaderIconButton;
}
