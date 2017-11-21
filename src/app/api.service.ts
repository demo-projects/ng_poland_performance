import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';


@Injectable()
export class ApiService {

  private notes = [
    {title: 'Update the user list'},
    {title: 'Optimize the API calls'},
    {title: 'Boost performance'},
    {title: 'Eat, breath'},
  ];

  constructor(private http: HttpClient) {
  }

  getUsers() {
    return this.http.get('http://localhost:3000/results');
  }

  getNotes() {
    return this.notes;
  }

  addNote(title: string) {
    this.notes = [...this.notes, {title}];
  }
}
