import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelephonetstService {

  private baseUrl = 'http://localhost:8080/marques';
  constructor(private http: HttpClient) { }

  getTelephonetst(idm): Observable<any> {
    return this.http.get(`${this.baseUrl}/${idm}/telephones`);
  }

  addTelephonetst(idm,tel):Observable<any>{
    return this.http.post(`${this.baseUrl}/${idm}/telephones`,tel);
  }

  putTelephonetst(idm,idt,tel):Observable<any>{
    return this.http.put(`${this.baseUrl}/${idm}/telephones/${idt}`,tel);
  }

  deletTelephonetst(idm,idt):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${idm}/telephones/${idt}`);
  }

  searshTelephonetst(idm,name):Observable<any>{
    return this.http.get(`${this.baseUrl}/${idm}/telephones/chercherTelephone?name=${name}`);
  }

  searchALLTelephonetst(name):Observable<any>{
    return this.http.get(`http://localhost:8080/chercherTelephone?name=${name}`,{responseType:'text' as 'json'});
  }

  getALLTelephonetst():Observable<any>{
    return this.searchALLTelephonetst('');
  }

}
