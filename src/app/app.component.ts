import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})

export class AppComponent implements OnInit {
  constructor(private router: Router, private userService: UserService) {}

  ngOnInit() {
    if (this.userService.isAuthenticated()) {
      console.log('1111');
      this.router.navigate(['/document']);
    } else {
      console.log('2222 ');
      this.router.navigate(['/login']);
    }
  }
}