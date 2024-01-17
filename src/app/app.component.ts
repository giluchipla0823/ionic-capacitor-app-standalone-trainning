import { Component, ViewChild } from '@angular/core';

import {
  IonApp,
  IonContent,
  IonHeader,
  IonLabel,
  IonMenu,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  IonItem,
  IonList,
  NavController,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
// import * as ionIcons from 'ionicons/icons';
import {
  personOutline,
  lockClosedOutline,
  eyeOffOutline,
  eyeOutline,
  searchOutline,
  arrowBackOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [
    IonApp,
    IonMenu,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonList,
    IonItem,
    IonLabel,
    IonRouterOutlet,
  ],
})
export class AppComponent {
  @ViewChild(IonMenu) ionMenu: IonMenu;

  constructor(private navController: NavController) {
    // addIcons(ionIcons);
    addIcons({
      personOutline,
      lockClosedOutline,
      eyeOffOutline,
      eyeOutline,
      searchOutline,
      arrowBackOutline,
    });
  }

  async goToPage(url: string): Promise<void> {
    await this.ionMenu.close();

    this.navController.navigateForward(url);
  }
}
