import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GetHelp } from 'src/app/interface/getHelp.interface';
import { GetHelpService } from 'src/app/services/getHelp/get-help.service';

@Component({
  selector: 'app-get-help-register',
  templateUrl: './get-help-register.component.html',
  styleUrls: ['./get-help-register.component.scss']
})
export class GetHelpRegisterComponent implements OnInit {

  gethelp: GetHelp = new GetHelp();
  formGetHelp!: FormGroup;

  constructor(private service: GetHelpService, private router: Router, private fB: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formGetHelp = this.fB.group({
      getHelpTitle: ['', [Validators.required]],
      getHelpText: ['', [Validators.required]]
    });
  }

  create(): void {
    if(this.formGetHelp.valid) {
      this.service.create(this.formGetHelp.value).subscribe(() => {
        this.router.navigate(['/wm/getHelp']);
        this.service.showMessage('Cadastro realizado com sucesso!', true);
      });
    } else {
      this.service.showMessage('Preencha todos os campos!', true);
    }
  }

}
