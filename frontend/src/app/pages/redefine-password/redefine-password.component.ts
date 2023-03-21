import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-redefine-password',
  templateUrl: './redefine-password.component.html',
  styleUrls: ['./redefine-password.component.scss']
})
export class RedefinePasswordComponent implements OnInit {

  formUser!: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  constructor(private router: Router) { }

  createForm() {
    this.formUser = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(10), Validators.email]),
    });
  }

  sendEmail(): void {
    this.router.navigate(['/login']);
  }
}
