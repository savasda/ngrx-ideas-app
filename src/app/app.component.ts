import { AuthDTO } from './models/auth';
import { LoginUser, RegisterUser, SetInitialUser, SetCurentUser } from '@app/store/actions/auth.action';
import { AddError, RemoveError } from './store/actions/error.action';
import { AppState } from './store/app-store.module';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ideas-app';

  constructor(private store: Store<AppState>) {  }

  ngOnInit() {
    this.store.dispatch(new SetInitialUser());
  }

}
