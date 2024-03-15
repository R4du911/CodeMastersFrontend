import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  public username!: string;
  public password!: string;
  public loginFailed = false;

  constructor(private router: Router) {}

  public onSubmit() {
    // try {
    //   const result = await this.authService
    //     .login(this.username, this.password)
    //     .toPromise();
    //   if (result) {
    //     this.router.navigateByUrl('/app/home');
    //   } else {
    //     this.loginFailed = true;
    //   }
    // } catch (error) {
    //   this.loginFailed = true;
    // }
    console.log("ckuck")
    this.router.navigateByUrl('/app/home');
  }
}
