import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private username:string;
  private clientid ="ba47012b2d427b57ddc0";
  private clientsecret ="7078b8b58a605e42f72e04df49771a6d55ae1fb2"; 

  constructor(private http:HttpClient) { 
    console.log("services is  now ready");
    this.username ='Leina33';

   }
getProfileInfo(){
  return this.http.get("https://api.github.com/users/" + this.username + "?client_id="+ this.clientid + "&client_secret=" + this.clientsecret);
 }
 getProfileRepos(){
  return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id="+ this.clientid + "&client_secret=" + this.clientsecret);
 }
 updateProfile(username:string){
  this.username = username;
 }
}
