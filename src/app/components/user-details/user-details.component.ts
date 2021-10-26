import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  url = "https://api.github.com/users/";
  listedUser: any;
  item:any;
  userInfo: any = [];
  isloading: boolean = false;

  constructor(
    private actRoute: ActivatedRoute,
    private http: HttpClient,
    private route: Router
  ) { }

  ngOnInit(): void {
    
    setTimeout(() => {
      this.isloading =  true;
      this.actRoute.queryParams.subscribe((params: any) => {

        if(params.id) {
          let userName = params.id;
          this.http.get(this.url+userName).subscribe(userDetails => {
            this.isloading = false;
            console.log(userDetails)
            this.userInfo = userDetails;
          })

        } else {

        }
        
        
      })
    }, 1000);
  }


}
