import { AppState } from './../app-store.module';
import { AddError, RemoveError } from './../actions/error.action';
import { SetInitialUser, SetCurentUser, LoginUser, AuthActions } from '@app/store/actions/auth.action';
import { User } from './../../models/user';
import { AuthService } from './../../services/auth.service';
import { Injectable } from "@angular/core";
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { Action, Store } from '@ngrx/store';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions,
    private store: Store<AppState>,
    private authService: AuthService){}

  @Effect()
  setinitialUser$: Observable<Action> = this.actions$.pipe(
    ofType<SetInitialUser>(AuthActions.SET_INITIAL_USER),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap(() => this.authService.whoami().pipe(
      map((user: User) => new SetCurentUser(user)),
      catchError(err => of(new AddError(err)))
    ))
  )


  @Effect()
  loginUser$: Observable<Action> = this.actions$.pipe(
    ofType<LoginUser>(AuthActions.LOGIN_USER),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap((action: LoginUser) => this.authService.auth('login', action.payload).pipe(
      map((user: User) => new SetCurentUser(user)),
      catchError(err => of(new AddError(err)))
    ))
  )

  @Effect()
  registerUser$: Observable<Action> = this.actions$.pipe(
    ofType<LoginUser>(AuthActions.REGISTER_USER),
    tap(() => this.store.dispatch(new RemoveError())),
    mergeMap((action: LoginUser) => this.authService.auth('register', action.payload).pipe(
      map((user: User) => new SetCurentUser(user)),
      catchError(err => of(new AddError(err)))
    ))
  )

}
