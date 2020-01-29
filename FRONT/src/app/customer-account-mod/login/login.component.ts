import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from '../../authentification.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthentificationService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9-_]+$')
      ])],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }


  setToken(token) {
    localStorage.setItem('token', token);
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    console.log([this.f.username.value, this.f.password.value]);
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .subscribe(
        data => {
          this.router.navigate(['/user/myAccount']);
        },
        error => {
          console.log(error);
          this.error = error;
          this.loading = false;
        });
  }
}
