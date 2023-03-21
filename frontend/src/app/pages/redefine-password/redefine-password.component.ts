import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-redefine-password',
  templateUrl: './redefine-password.component.html',
  styleUrls: ['./redefine-password.component.scss']
})
export class RedefinePasswordComponent implements OnInit {

  formUserRedefine!: FormGroup;

  ngOnInit(): void {
    this.createForm();
  }

  constructor(private router: Router) { }

  createForm() {
    this.formUserRedefine = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(10), Validators.email]),
    });
  }

  extractEmail() {
    let email = this.formUserRedefine.get('email')?.value;
    localStorage.setItem('email', email);
  }

  sendEmail(): void {
    this.extractEmail();
    this.router.navigate(['/sedingConfirmation']);
  }
}
