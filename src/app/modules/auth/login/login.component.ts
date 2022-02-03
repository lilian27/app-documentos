import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  runPattern: any= /^[0-9]+-[0-9kK]{1}$/;
  createFormGroup() {
    return new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
    });
  }
  loginForm: FormGroup;

  constructor(
    private autService: AuthService,
    private router: Router
  ) //private form: FormBuilder
  {
    this.loginForm = this.createFormGroup();
  }

  ngOnInit(): void {}

  onLogin(): void {
    if (this.loginForm.valid) {
      const formValue = this.loginForm.value;
      this.autService.login(formValue).subscribe((rest) => {
        if (rest) {
          this.router.navigate(['']);
        }
      });
    }else console.log('no valida')
  }

  /*
    Pasar la validacion de rut a una directiva o similar
  */
  rut(rutCompleto: string){
    if (!/^[0-9]+-[0-9kK]{1}$/.test(rutCompleto)) {
      return false;
    }
    rutCompleto = rutCompleto.replace(".", "");
    var tmp = rutCompleto.split("-");
    return this.dv(tmp[0]) == tmp[1].toLowerCase();
  }

  dv(T:any){
    console.log("dv", T);
    var M = 0,
      S = 1;
    for (; T; T = Math.floor(T / 10))
      S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
    return S ? S - 1 : "k";
  }

  validarRut():boolean{
    const formValue = this.loginForm.value;
    let resultado = this.rut(formValue.username) 
    console.log(resultado)
    return resultado
  }

  get username() { return this.loginForm.get('username') as FormControl}
  get password() { return this.loginForm.get('password') as FormControl}
};

  


