import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '@services/api/auth.service';
import { finalize } from 'rxjs';
import { ShowHidePasswordComponent } from '@components/shared/show-hide-password/show-hide-password.component';
import { ErrorMessagesComponent } from '@components/shared/error-messages/error-messages.component';
import {
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonToggle,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonItem,
    IonIcon,
    IonButton,
    IonInput,
    IonToggle,
    FormsModule,
    ReactiveFormsModule,
    ErrorMessagesComponent,
    ShowHidePasswordComponent,
  ],
})
export class LoginPage implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private loadingController: LoadingController,
    private fb: FormBuilder,
    private alertController: AlertController,
    private authService: AuthService
  ) {}

  get f() {
    return this.form.controls as { [key: string]: FormControl };
  }

  ngOnInit(): void {
    this.buildForm();
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const loading = await this.loadingController.create({
      message: 'Verificando...',
    });

    await loading.present();

    const { email, password } = this.form.value;

    this.authService
      .login(email, password)
      .pipe(finalize(() => loading.dismiss()))
      .subscribe({
        next: () => {
          this.router.navigate(['/home']);
        },
        error: async (err) => {
          const alert = await this.alertController.create({
            message: err.message,
          });

          alert.present();
        },
      });
  }

  private buildForm(): void {
    this.form = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(20)],
      ],
      password: ['', [Validators.required]],
      remember_me: [false],
    });
  }
}
