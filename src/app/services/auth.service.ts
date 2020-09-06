import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { AuthType, AuthDTO } from '@app/models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private api: string  = environment.apiHost + '/auth';

  constructor(private http : HttpClient) { }

  private auth(authType: AuthType, data: AuthDTO) {
    return this.http.post(`${this.api}/${authType}`, data);
  }

  login(data: AuthDTO) {
    return this.auth('login', data)
  }

  register(data: AuthDTO) {
    return this.auth('register', data)
  }

  get token() {
    return localStorage.getItem('idea_token');
  }

  set token(val: string) {
    if(val) localStorage.setItem('idea_token', val);
    else localStorage.clear();
  }
}
