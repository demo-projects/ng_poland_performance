import {Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'users',
  template: `
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
          <tr *ngFor="let user of users; let i = index">
            <td>{{ i }}</td>
            <td>{{ user.name.first }}</td>
            <td>{{ user.gender }}</td>
            <td>{{ user.nat }}</td>
            <td>{{ getUserCode(user.gender, user.nat )}}</td>
          </tr>
      </tbody>
    </table>
    
  `,
})
export class UsersComponent implements OnChanges {

  @Input() users;
  @Input() notes;
  @Output() onUpdate = new EventEmitter();

  // will called on every input change
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Users component changed! ');
    console.log(changes);
  }

  // called on every CD
  getUserCode(gender, nat ) {
    console.log('calculate user code');
    if(gender === 'male' && nat === 'BR') {
      return 1
    }
    return 0
  }
}
