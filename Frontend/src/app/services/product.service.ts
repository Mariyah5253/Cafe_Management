import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = environment.apiUrl;

  constructor(private httpClient:HttpClient) { }

  add(data:any){
    return this.httpClient.post('http://localhost:8080/product/add/',data,{
    headers: new HttpHeaders().set('Content-Type',"application/json")
    })
  }

  update(data:any){
    return this.httpClient.patch('http://localhost:8080/product/update/',data,{
      headers: new HttpHeaders().set('Content-Type',"application/json")
      })
    }

    getProduct(){
      return this.httpClient.get('http://localhost:8080/product/get/');
    }

    updateStatus(data:any){
      return this.httpClient.patch('http://localhost:8080/product/updateStatus/',data,{
        headers: new HttpHeaders().set('Content-Type',"application/json")
        })
      }

      delete(id:any){
        return this.httpClient.delete('http://localhost:8080/product/delete/'+id,{
          headers: new HttpHeaders().set('Content-Type',"application/json")
          })
      }

      getProductsByCategory(id:any){
        return this.httpClient.get('http://localhost:8080/product/getByCategory/'+id);
      }

      getById(id:any){
        return this.httpClient.get('http://localhost:8080/product/getById/'+ id);
      }

}
