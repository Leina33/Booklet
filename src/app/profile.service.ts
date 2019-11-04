import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid ="d16c6d550ee573032dd5";
  private clientsecrete ="0ed3c3f21528614c788def7a4e78303680459027"; 

  constructor(private http:HttpClient) { 
    console.log("services is  now ready");
    this.username ='Leina33';

   }
   getProfileInfo(){
     return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secrete" + this.clientsecrete); 
   }
}
