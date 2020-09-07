import { AuthActions, AuthActionsTypes } from '@app/store/actions/auth.action';
import { User } from '@app/models/user';

export interface AuthState {
  user: User | null | any;
  loading: boolean;
  loaded: boolean;
}

const initialState: AuthState = {
  user: null,
  loading: false,
  loaded: false
};

export const authReducer: (state: AuthState, action: AuthActionsTypes) => AuthState = (
  state = initialState,
  action: AuthActionsTypes
) => {
  switch (action.type) {
    case AuthActions.LOGIN_USER:
      return { ...state, loading: true, loaded: false };
    case AuthActions.REGISTER_USER:
      return { ...state, loading: true, loaded: false };
    case AuthActions.SET_INITIAL_USER:
      return { ...state, loading: true, loaded: false };
    case AuthActions.SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        loading: false,
        loaded: true
      };
    default:
      return state;
  }
};
