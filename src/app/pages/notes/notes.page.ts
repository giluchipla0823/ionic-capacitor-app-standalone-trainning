import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { BackButtonComponent } from '@components/shared/back-button/back-button.component';
import { SearchbarComponent } from '@components/shared/searchbar/searchbar.component';
import { Note } from '@config/interfaces/note.interface';
import { NOTES_DATA } from '@data/note-data';
import { HighlightDirective } from '@directives/highlight.directive';
import { IonicModule } from '@ionic/angular';
import { FilterDataPipe } from '@pipes/filter-data.pipe';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    NgIf,
    NgFor,
    SearchbarComponent,
    BackButtonComponent,
    FilterDataPipe,
    HighlightDirective,
  ],
})
export class NotesPage {
  notes: Array<Note> = [...NOTES_DATA];

  searchTerm = '';
}
