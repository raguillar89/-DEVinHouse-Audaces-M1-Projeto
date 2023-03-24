import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Model } from 'src/app/interface/model.interface';
import { ModelService } from 'src/app/services/model/model.service';

@Component({
  selector: 'app-model-edit',
  templateUrl: './model-edit.component.html',
  styleUrls: ['./model-edit.component.scss']
})
export class ModelEditComponent implements OnInit {

  model: Model = new Model();
  formModel!: FormGroup;

  constructor(private service: ModelService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.model.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.createForm();
  }

  createForm() {
    this.formModel = new FormGroup({
      modelName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      modelResponsible: new FormControl('', [Validators.required, Validators.minLength(5)]),
      modelType: new FormControl('', [Validators.required]),
      modelCollection: new FormControl('', [Validators.required]),
      modelEmbroidery: new FormControl('', [Validators.required]),
      modelStamp: new FormControl('', [Validators.required])
    });
  }

  findById(): void {
    this.service.findById(this.model.id).subscribe(model => {
      this.model = model;
    });
  }

  update(): void {
    this.service.update(this.model).subscribe(() => {
      this.service.showMessage('Coleção Atualizada com Sucesso!', true);
      this.router.navigate(['wm/model']);
    })
  }

  delete(): void {
    this.service.delete(this.model.id).subscribe(() => {
      this.service.showMessage('Coleção Excluída com Sucesso!', true);
      this.router.navigate(['wm/model']);
    })
  }
}
