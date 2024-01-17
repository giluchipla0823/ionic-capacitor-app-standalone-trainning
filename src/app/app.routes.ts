import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'notes',
    loadComponent: () =>
      import('./pages/notes/notes.page').then((m) => m.NotesPage),
  },
  {
    path: 'post/:id',
    loadComponent: () =>
      import('./pages/post/post.page').then((m) => m.PostPage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];
