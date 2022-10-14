import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillService {
  url = environment.apiUrl;

  constructor(private httpClient:HttpClient) { }

  generateReport(data:any){
    return this.httpClient.post('http://localhost:8080/bill/generateReport',data,{
      headers: new HttpHeaders().set('Content-Type',"application/json")
    })
  }

  getPDF(data:any):Observable<Blob>{
  return this.httpClient.post('http://localhost:8080/bill/getPdf',data,{responseType:'blob'});
  }

  getBills(){
    return this.httpClient.get('http://localhost:8080/bill/getBills/');
  }

  delete(id:any){
    return this.httpClient.delete('http://localhost:8080/bill/delete/'+id,{
      headers:new HttpHeaders().set('Content-Type',"application/json")
    })
  }

}
