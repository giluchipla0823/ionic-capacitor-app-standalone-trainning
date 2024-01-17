import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-empty-results',
  templateUrl: './empty-results.component.html',
  styleUrls: ['./empty-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonIcon, NgIf],
})
export class EmptyResultsComponent {
  @Input() iconName: string = 'search-outline';
  @Input() message: string;
  @Input() additionalMessage: string;
}
