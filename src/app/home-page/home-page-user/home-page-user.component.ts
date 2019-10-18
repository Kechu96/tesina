import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/shared/auth.service';
declare var $:any;

@Component({
  selector: 'app-home-page-user',
  templateUrl: './home-page-user.component.html',
  styleUrls: ['./home-page-user.component.scss']
})
export class HomePageUserComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
    
    
  }
  isAuthenticated(): boolean{
    return this.authService.isAuthenticated();
  }
  close() {
   
  }
}
