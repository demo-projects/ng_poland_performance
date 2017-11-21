import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UsersComponent } from './users.component';
import { NotesComponent } from './notes.component';
import {HttpClientModule} from '@angular/common/http';
import {ApiService} from './api.service';
import {FormsModule} from '@angular/forms';
import { GetCodePipe } from './get-code.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NotesComponent,
    GetCodePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
