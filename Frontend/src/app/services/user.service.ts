import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  signup(data: any) {
    return this.httpClient.post('http://localhost:8080/user/signup/', data, {
      headers: new HttpHeaders().set('Content-Type', "application/json")
    })
  }

  forgotPassword(data:any){
    return this.httpClient.post('http://localhost:8080/user/forgotPassword/',data,{
      headers: new HttpHeaders().set('Content-Type',"application/json")
    })
  }

  login(data:any){
    return this.httpClient.post('http://localhost:8080/user/login/',data,{
      headers: new HttpHeaders().set('Content-Type',"application/json")
    })
  }

  checkToken(){
    return this.httpClient.get('http://localhost:8080/user/checkToken/');
  }

  changePassword(data:any){
    return this.httpClient.post('http://localhost:8080/user/changePassword/',data,{
      headers: new HttpHeaders().set('Content-Type',"application/json")
    })
  }

  getUsers(){
    return this.httpClient.get('http://localhost:8080/user/get');
  }

  update(data:any){
    return this.httpClient.patch('http://localhost:8080/user/update',data,{
      headers: new HttpHeaders().set('Content-Type',"application/json")
    })
  }

}
