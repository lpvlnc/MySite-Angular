import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private toastr: ToastrService,
              private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  login(): void {
    this.toastr.info("Login doesn't implemented yet.", 'Login action');
  }
}
