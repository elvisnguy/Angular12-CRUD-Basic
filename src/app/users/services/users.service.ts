import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<Array<User>> {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return this.http.get<Array<User>>(url);
  }

  getUserbyId(userId: number): Observable<User> {
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    return this.http.get<User>(url);
  }

  updateUser(user: User): Observable<any> {
    const url = `https://jsonplaceholder.typicode.com/users/${user.id}`;
    return this.http.put(url, user);
  }

  deleteUsers(userId): Observable<User>{
    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
    return this.http.delete<User>(url); // return an observable
  }
  createUsers(user: User): Observable<User>{
    const url = `https://jsonplaceholder.typicode.com/users`;
    return this.http.post<User>(url, user);
  }
}
