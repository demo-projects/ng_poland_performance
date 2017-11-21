import {Component, Input, OnChanges, SimpleChanges, Output, EventEmitter, ChangeDetectionStrategy} from '@angular/core';


@Component({
  selector       : 'users',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template       : `
    <h2>Users</h2>
    <button (click)="onUpdate.emit()">update data</button>
    <table>
      <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Gender</th>
        <th>Nationality</th>
        <th>Code</th>
      </tr>
      </thead>
      <tbody>
      <tr *ngFor="let user of _users; let i = index">
        <td>{{ i }}</td>
        <td>{{ user.name.first }}</td>
        <td>{{ user.gender }}</td>
        <td>{{ user.nat }}</td>
        <td>{{ user | getCode:user.gender:user.nat}}</td>
      </tr>
      </tbody>
    </table>

  `,
})
export class UsersComponent implements OnChanges {

  public _users;

  // run only when users changed
  @Input()
  set users(data) {
    console.log('users updated');
    this._users = data;
  };

  @Input() notes;
  @Output() onUpdate = new EventEmitter();

  // will called on every input change
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Users component changed! ');
    console.log(changes);
  }

  // called on every CD
  getUserCode(gender, nat) {
    console.log('calculate user code');
    if (gender === 'male' && nat === 'BR') {
      return 1
    }
    return 0
  }
}
