import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GitUserService {
  
  username:string = "";
  githubUrl = "https://api.github.com/search/users?q=";

  // client ID and Secret to make unlimited API calls
   clientSecret = "a62433dea93cb19de081c54520a060e703dfb287";
   clientId = "00f5ffcebc7cf3b9891e";
  
  constructor(
    private http: HttpClient,
  ) { 
    this.username = "";
  }

  getUserProfile(){
    
    return this.http.get(this.githubUrl+this.username+"+in:user");
  }

  updateUser(username: string){
    this.username = username;
  }
}
