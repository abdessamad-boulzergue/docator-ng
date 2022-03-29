import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppHttpService {

  private static ROOT_URL="http://127.0.0.1:8083";

  constructor(private ngHttp : HttpClient) { }

  get(url: string) {
    url = AppHttpService.ROOT_URL.concat(url);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    this.ngHttp.get(url,httpOptions).pipe(
      catchError(this.errorHandler)
    );
  }
  private errorHandler(error : HttpErrorResponse){
    if(error.status===0){
     //network/frontend error
    }else{
      //backend error
    }
    return throwError(()=>new Error('network error occurred'));
  }
}
