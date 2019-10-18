import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  load: boolean;
  firsTime: boolean;

  constructor(private form: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.load = false;
    this.createForm();
  }
  login() {
    this.load = true;
    this.authService.logIn(this.loginForm.value).subscribe(
      ()=>{
        this.load = false;
        this.router.navigate(['/user/userHome']);
        this.toastr.success('Bienvenido/a ' + this.authService.getName());
      },
      (error)=>{
        this.load = false;
        this.toastr.error(error.error.details,error.error.title);
      }
    )
  }
  createForm() {
    this.loginForm = this.form.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
      password: ['', Validators.required]
    });
  }
  invalidEntry(field): boolean {
    return this.loginForm.controls[field].invalid && (this.loginForm.controls[field].dirty || this.loginForm.controls[field].touched);
  }
  isRequired(field): boolean{
    return this.loginForm.controls[field].errors.required;
  }

}
