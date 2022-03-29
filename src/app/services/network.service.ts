import { Injectable } from '@angular/core';
import { AppHttpService } from './app-http.service';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {
  private static LOGIN_URL:string ="/login"
  constructor(private http: AppHttpService) {

   }

   login(username:string, password:string){
     this.http.get(NetworkService.LOGIN_URL);
   }
}
