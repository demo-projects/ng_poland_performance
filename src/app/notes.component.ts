import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'notes',
  template: `
    <h2>Notes</h2>
    <input type="text"
           placeholder="add note.."
           [(ngModel)]="note"
           (keydown.enter)="addNote()">
    <ul>
      <li *ngFor="let note of notes">{{ note.title }}</li>
    </ul>
  `,
  styles  : []
})
export class NotesComponent {

  @Input() notes;
  @Output() noteAdded = new EventEmitter<string>();

  public note: string;

  addNote(){
    this.noteAdded.emit(this.note)
  }

}
