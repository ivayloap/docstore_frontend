import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.less']
})
export class UserRegisterComponent {
  email: string = '';
  password: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService) {}

  registerUser() {
    const user = { email: this.email, password: this.password };
    this.userService.registerUser(user).subscribe(
      () => {
        this.errorMessage = '';
        this.successMessage = 'User created successfully';
      },
      (error) => {
        if (error.error && error.error.message) {
          this.errorMessage = error.error.message;
          this.successMessage = '';
        }
      }
    );
  }

  showErrorMessage(message: string) {
  }
}
