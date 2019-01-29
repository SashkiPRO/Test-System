import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./model/user.model";
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get("/test")
    // return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
  getUser(userId) {
    return this.http.get('https://jsonplaceholder.typicode.com/users/'+userId)
  }
  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  createUser(user: User) {
    return this.http.post("/user", user);
  }
}
