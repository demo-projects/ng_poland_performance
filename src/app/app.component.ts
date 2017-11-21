import {Component, OnInit, NgZone} from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>Time is money {{ time | date:'MM:ss' }} </h1>
      <div class="row">
        <div class="column column-50">
          <users [users]="users" [notes]="notes" (onUpdate)="refreshUsers()"></users>
        </div>
        <div class="column column-offset-10 column-40">
          <notes [notes]="notes" (noteAdded)="addNote($event)"></notes>
        </div>
      </div>
    </div>
  `
})
export class AppComponent implements OnInit {

  public users: any[];
  public notes: any[];
  public time;

  constructor(private api: ApiService) {
    this.users = [];
    this.notes = [];

    // setInterval(() => this.time = new Date(), 1000);
  }

  ngOnInit(): void {
    this.api
        .getUsers()
        .subscribe((data: any) => this.users = data);

    this.notes = this.api.getNotes();
  }

  addNote(title: string) {
    this.notes = [...this.notes, {title}];
  }

  refreshUsers(){
    this.users = [...this.users, {
        "gender": "male",
        "name": {"first": "Nir"},
        "nat" : "BR"
    }]
  }


}
