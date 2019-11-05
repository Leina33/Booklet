import { Component, OnInit } from '@angular/core';
import {ProfileService } from '../profile.service';
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   profile:any;
   repos:any;
   username:string;
  

  constructor(private profileServices:ProfileService) { 
  
  }

findProfile(){
  this.profileServices.updateProfile(this.username);
  this.profileServices.getProfileInfo().subscribe(profile =>  {
    console.log(profile);
    this.profile= profile;
  });
  this.profileServices.getProfileRepos().subscribe(repos => {
    console.log (repos);
    this.repos =repos;

  })
}
  ngOnInit() {
  }

}
