import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { GitUserService } from 'src/app/services/git-user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
   userDetails:any = [];
   username: string;
   totalCount: string;
   listedUser: any = [];
   item: any;
   githubURL: string;
   followers: any;
   p: number = 1;
  q: number = 1;
  isloading: boolean = false;

  constructor(
    private searchService: GitUserService,
    private router: Router
    ) {
   

   }

  ngOnInit(): void {
    
  }

  searchUser(){
    
    this.isloading = true;
    this.searchService.getUserProfile().subscribe(user => {
      this.isloading = false;
      console.log(user);
      
      this.userDetails = user;
      this.totalCount = this.userDetails.total_count;
      this.listedUser = this.userDetails.items;
      
      
    })
  }

  openUserInfo(item:any){
    console.log(item)
    this.router.navigate([
      '/user-detail'
    ], {queryParams: {id: item.login}});
  }

}
