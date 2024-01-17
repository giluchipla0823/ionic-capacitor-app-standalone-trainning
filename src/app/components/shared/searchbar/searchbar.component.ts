import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { SearchbarCustomEvent } from '@ionic/angular';
import { IonSearchbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonSearchbar],
})
export class SearchbarComponent {
  @Output() onChange = new EventEmitter<string>();
  @Input() placeholder = 'Search...';
  @Input() debounce = 300;

  handleChange($event: SearchbarCustomEvent) {
    this.onChange.emit($event.detail.value);
  }
}
