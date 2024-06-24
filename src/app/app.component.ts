import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Brooch';
  loginShow:boolean = false;

  constructor() {}
  checkLogin() {
    if(localStorage.getItem('userToken') != null) {
      this.loginShow = true;
    } else {
      this.loginShow = false;
    }
  }
}
