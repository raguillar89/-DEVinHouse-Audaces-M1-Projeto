import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  user: User = new User();
  formUserCreate!: FormGroup;
  listUsers: User[] = [];
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  passwordPattern = '^[0-9]+$';

  ngOnInit(): void {
    this.getUsersList();
    this.createForm();
  }

  constructor(private router: Router, private service: UserService, private fB: FormBuilder) { }

  createForm() {
    this.formUserCreate = this.fB.group({
      userName: ['', [Validators.required, Validators.minLength(5)]],
      userCompany: ['', [Validators.required, Validators.minLength(4)]],
      userCnpj: ['', [Validators.required, Validators.minLength(10)]],
      userEmail: ['', [Validators.required, Validators.minLength(10), Validators.pattern(this.emailPattern)]],
      userPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern(this.passwordPattern)]],
      userPasswordConfirmation: ['', [Validators.required, Validators.minLength(8), Validators.pattern(this.passwordPattern)]]
    });
  }

  getUsersList() {
    this.service.findAll().subscribe((users) => {
      this.listUsers = users;
    });
  }

  create(): void {
    let password = this.formUserCreate.get('userPassword')?.value;
    let passwordConfirmation = this.formUserCreate.get('userPasswordConfirmation')?.value;
    let userEmail = this.formUserCreate.get('userEmail')?.value;
    let dbEmail = this.listUsers.find((user) => user.userEmail == userEmail)

    if(password !== passwordConfirmation){
      this.service.showMessage('Senhas divergentes, favor conferir.', true);
    } else {
      if(!dbEmail) {
        if(this.formUserCreate.valid) {
          this.service.create(this.formUserCreate.value).subscribe(() => {
            this.router.navigate(['/login']);
            this.service.showMessage('Cadastro realizado com sucesso!', true);
          });
        } else {
          this.service.showMessage('Preencha todos os campos!', true);
        }
      } else {
        this.service.showMessage('E-mail já cadastrado, favor conferir.', true);
      }
    }
  }

}
