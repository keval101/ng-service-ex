import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit{
    accounts: {name:string, status:string}[] = [];

    constructor(private accountsService:AccountsService , private userService:UserService){}
  
    ngOnInit(){
      this.accounts = this.accountsService.accounts;
    }



}
