import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
} from '@angular/core';
import { IonIcon, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-show-hide-password',
  templateUrl: './show-hide-password.component.html',
  styleUrls: ['./show-hide-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IonIcon, IonInput],
})
export class ShowHidePasswordComponent {
  @ContentChild(IonInput, { static: false }) input!: IonInput;

  show = false;

  toggleShow(): void {
    this.show = !this.show;

    if (this.show) {
      this.input.type = 'text';
    } else {
      this.input.type = 'password';
    }
  }
}
