import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = this.form.group({
    username: [''],
    password: [''],
  });

  constructor(
    private autService: AuthService,
    private router: Router,
    private form: FormBuilder
  ) {}

  ngOnInit(): void {}

  onLogin(): void {
    const formValue = this.loginForm.value;
    this.autService.login(formValue).subscribe((rest) => {
      if (rest) {
        this.router.navigate(['']);
      }
    });
  }
}
