import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '@config/interfaces/post.interface';
import { PostService } from '@services/api/post.service';
import { tap } from 'rxjs';
import { BackButtonComponent } from '@components/shared/back-button/back-button.component';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButtons,
  IonImg,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-post-page',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButtons,
    IonImg,
    BackButtonComponent,
  ],
})
export class PostPage implements OnInit {
  id: number;
  post: Post;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService
  ) {
    this.id = Number(this.activatedRoute.snapshot.params['id']);
  }

  ngOnInit(): void {
    this.postService
      .getPost(this.id)
      .pipe(tap(console.log))
      .subscribe((post) => (this.post = post));
  }
}
