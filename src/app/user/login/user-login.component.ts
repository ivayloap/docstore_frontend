import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.less']
})
export class UserLoginComponent {
  email: string = '';
  password: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService) {}

  loginUser() {
    const user = { email: this.email, password: this.password };
    this.userService.loginUser(user).subscribe(
      (response: boolean) => {
        if (response) {
          console.log('success');
          this.errorMessage = '';
          this.successMessage = 'Login successful';
        } else {
          console.log('error');
          this.errorMessage = 'Invalid credentials';
          this.successMessage = '';
        }
      },
      (error) => {
        console.log('error', error);
        this.errorMessage = 'An error occurred';
        this.successMessage = '';
      }
    );
  }

}
