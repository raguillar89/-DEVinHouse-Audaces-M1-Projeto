import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GetHelp } from 'src/app/interface/getHelp.interface';
import { GetHelpService } from 'src/app/services/getHelp/get-help.service';

@Component({
  selector: 'app-get-help-edit',
  templateUrl: './get-help-edit.component.html',
  styleUrls: ['./get-help-edit.component.scss']
})
export class GetHelpEditComponent implements OnInit {

  gethelp: GetHelp = new GetHelp();
  formGetHelp!: FormGroup;

  constructor(private service: GetHelpService, private router: Router, private route: ActivatedRoute, private fB: FormBuilder) {}

  ngOnInit(): void {
    this.gethelp.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.createForm();
  }

  createForm() {
    this.formGetHelp = this.fB.group({
      getHelpTitle: ['', [Validators.required, Validators.minLength(10)]],
      getHelpText: ['', [Validators.required, Validators.minLength(20)]]
    });
  }

  findById():void {
    this.service.findById(this.gethelp.id).subscribe(gethelp => {
      this.gethelp = gethelp;
    });
  }

  update(): void {
    this.gethelp.getHelpText = this.formGetHelp.value.getHelpText;
    this.gethelp.getHelpTitle = this.formGetHelp.value.getHelpTitle;

    if(this.formGetHelp.valid) {
      this.service.update(this.gethelp).subscribe(() => {
        this.service.showMessage('Card Atualizada com Sucesso!', true);
        this.router.navigate(['wm/getHelp']);
      })
    } else {
      this.service.showMessage('Preencha todos os campos!', true);
    }
  }

  delete(): void {
    if(this.formGetHelp.valid) {
      this.service.delete(this.gethelp.id).subscribe(() => {
        this.service.showMessage('Card Excluído com Sucesso!', true);
        this.router.navigate(['wm/getHelp']);
      })
    } else {
      this.service.showMessage('Preencha todos os campos!', true);
    }
  }

}
