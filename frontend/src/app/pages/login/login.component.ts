import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  formUser!: FormGroup;
  listUsers: User[] = [];
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  passwordPattern = '^[0-9]+$';

  ngOnInit(): void {
    this.getUsersList();
    this.createForm();
    this.createLocalStorage(false);
  }

  constructor(private router: Router, private service: UserService) { }

  createForm() {
    this.formUser = new FormGroup({
      userEmail: new FormControl('', [Validators.required, Validators.minLength(10)]),
      userPassword: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }

  get userEmail() {
    return this.formUser.get('userEmail');
  }

  get userPassword() {
    return this.formUser.get('userPassword');
  }

  createLocalStorage(booleanValue: boolean) {
    localStorage.setItem('logged', `${booleanValue}`);
  }

  getUsersList() {
    this.service.findAll().subscribe((users) => {
      this.listUsers = users;
    });
  }

  findUser(form: FormGroup) {
    this.listUsers.find((user) => {
      if(user.userEmail === form.value.userEmail) {
        this.user = user;
      }
    });
  }

  correctPassword(form: FormGroup, user: User) {
    if(user.userPassword === form.value.userPassword) {
      return true;
    }
    return false;
  }

  extractUser() {
    const userName = this.user.userName;
    localStorage.setItem('userName', userName);
  }

  onSubmit() {
    this.findUser(this.formUser);
    if(this.correctPassword(this.formUser, this.user) ) {
      this.createLocalStorage(true);
      this.extractUser();
      this.service.showMessage('Login Realizado com Sucesso.')
      this.router.navigate(['/wm']);
    } else {
      this.service.showMessage('E-mail e/ou Password Incorretos.')
      this.createLocalStorage(false);
    }
  }
}
