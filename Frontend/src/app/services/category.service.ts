import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  url = environment.apiUrl;

  constructor(private httpClient:HttpClient) { }

  add(data:any){
    return this.httpClient.post('http://localhost:8080/category/add/',data,{
      headers: new HttpHeaders().set('Content-Type',"application/json")
    })
  }

  update(data:any){
    return this.httpClient.patch('http://localhost:8080/category/update/',data,{
      headers: new HttpHeaders().set('Content-Type',"application/json")
    })
  }

  getCategories(){
    return this.httpClient.get('http://localhost:8080/category/get/')
  }
}
