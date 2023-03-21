import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seding-confirmation',
  templateUrl: './seding-confirmation.component.html',
  styleUrls: ['./seding-confirmation.component.scss']
})
export class SedingConfirmationComponent implements OnInit {

  email!: any;

  ngOnInit(): void {
    this.email = localStorage.getItem('email');
  }

  constructor(private router: Router) { }

  backLogin(): void {
    localStorage.removeItem('email');
    this.router.navigate(['/login']);
  }

}
