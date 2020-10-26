import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { 
  }
  
  postContactMessage(name, email, message){
    let data = {
      name: name,
      email: email,
      message: message
    };

    return this.http.post("https://formspree.io/f/xjvpwdwp", data).toPromise();
  }
}
