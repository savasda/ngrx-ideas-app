import { validateWhitespace } from './../../utilites/validators';
import { LoginUser, RegisterUser } from '@app/store/actions/auth.action';
import { AppState } from './../../store/app-store.module';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.authForm = this.fb.group({
      username: ['', [Validators.required, validateWhitespace]],
      password: ['', [Validators.required, validateWhitespace]]
    })
  }

  login() {
    const val = this.authForm.value;
    if (this.authForm.valid) this.store.dispatch(new LoginUser(val));
    else console.log(this.authForm)
  }

  register() {
    const val = this.authForm.value;
    if (this.authForm.valid) this.store.dispatch(new RegisterUser(val));
    else console.log(this.authForm)
  }

}
