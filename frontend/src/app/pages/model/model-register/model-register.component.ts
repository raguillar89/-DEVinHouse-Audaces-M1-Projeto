import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Model } from 'src/app/interface/model.interface';
import { ModelService } from 'src/app/services/model/model.service';

@Component({
  selector: 'app-model-register',
  templateUrl: './model-register.component.html',
  styleUrls: ['./model-register.component.scss']
})
export class ModelRegisterComponent implements OnInit {

  model: Model = new Model();
  formModel!: FormGroup;

  constructor(private service: ModelService, private router: Router) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formModel = new FormGroup({
      modelName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      modelResponsible: new FormControl('', [Validators.required, Validators.minLength(5)]),
      modelType: new FormControl('', [Validators.required]),
      modelCollection: new FormControl('', [Validators.required]),
      modelEmbroidery: new FormControl('', [Validators.required]),
      modelPrint: new FormControl('', [Validators.required])
    });
  }

  create(): void {
    this.service.create(this.model).subscribe(() => {
      this.router.navigate(['/wm/model']);
      this.service.showMessage('Cadastro realizado com sucesso!', true);
    });
  }

}
