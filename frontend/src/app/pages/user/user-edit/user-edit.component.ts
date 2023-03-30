import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  user: User = new User();
  formUserCreate!: FormGroup;
  listUsers: User[] = [];
  passwordPattern = '^[0-9]+$';

  ngOnInit(): void {
    this.user.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.getUsersList();
    this.createForm();
  }

  constructor(private router: Router, private service: UserService, private fB: FormBuilder, private route: ActivatedRoute) { }

  createForm() {
    this.formUserCreate = this.fB.group({
      userName: ['', [Validators.required, Validators.minLength(5)]],
      userCompany: ['', [Validators.required, Validators.minLength(4)]],
      userCnpj: ['', [Validators.required, Validators.minLength(10)]],
      userPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern(this.passwordPattern)]],
      userPasswordConfirmation: ['', [Validators.required, Validators.minLength(8), Validators.pattern(this.passwordPattern)]]
    });
  }

  getUsersList() {
    this.service.findAll().subscribe((users) => {
      this.listUsers = users;
    });
  }

  findById(): void {
    this.service.findById(this.user.id).subscribe(user => {
      this.user = user;
      this.formUserCreate.patchValue(this.user);
    });
  }

  update(): void {
    let password = this.formUserCreate.get('userPassword')?.value;
    let passwordConfirmation = this.formUserCreate.get('userPasswordConfirmation')?.value;

    this.user.userName = this.formUserCreate.value.userName;
    this.user.userCompany = this.formUserCreate.value.userCompany;
    this.user.userCnpj = this.formUserCreate.value.userCnpj;

    if(password !== passwordConfirmation){
      this.service.showMessage('Senhas divergentes, favor conferir.', true);
    } else {
      if(!this.formUserCreate.valid){
        this.service.showMessage('Preencha todas as informações', true);
      } else {
        this.service.update(this.user).subscribe(() => {
          this.service.showMessage('Usuário Atualizada com Sucesso!', true);
          this.router.navigate(['wm/dashboard']);
        })
      }
    }
  }
}
