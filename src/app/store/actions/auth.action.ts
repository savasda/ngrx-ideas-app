import { Action } from '@ngrx/store';
import { User } from '@app/models/user';
import { AuthDTO } from '@app/models/auth';


export enum AuthActions {
  LOGIN_USER = '[AUTH] Login user',
  REGISTER_USER = '[AUTH] Register user',
  SET_CURRENT_USER = '[AUTH] set curent user',
  SET_INITIAL_USER = '[AUTH] set initial user'
}


export class LoginUser implements Action {
  type = AuthActions.LOGIN_USER;
  constructor(public payload: AuthDTO){}
}

export class RegisterUser implements Action {
  type = AuthActions.REGISTER_USER;
  constructor(public payload: AuthDTO){}
}

export class SetInitialUser implements Action {
  type = AuthActions.SET_INITIAL_USER;
  constructor(public payload?: User){}
}

export class SetCurentUser implements Action {
  type = AuthActions.SET_CURRENT_USER;
  constructor(public payload: User | null){}
}


export type AuthActionsTypes = LoginUser | RegisterUser | SetInitialUser | SetCurentUser;
