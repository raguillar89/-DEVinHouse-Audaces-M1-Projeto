import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Collection } from 'src/app/interface/collection.interface';
import { Model } from 'src/app/interface/model.interface';
import { CollectionService } from 'src/app/services/collection/collection.service';
import { ModelService } from 'src/app/services/model/model.service';

@Component({
  selector: 'app-model-register',
  templateUrl: './model-register.component.html',
  styleUrls: ['./model-register.component.scss']
})
export class ModelRegisterComponent implements OnInit {

  model: Model = new Model();
  formModel!: FormGroup;
  collection: Collection = new Collection();
  listCollections: Collection[] = [];

  constructor(private service: ModelService, private router: Router, private collectionService: CollectionService, private fB: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
    this.findAllCollection();
  }

  createForm() {
    this.formModel = this.fB.group({
      modelName: ['', [Validators.required, Validators.minLength(4)]],
      modelResponsible: ['', [Validators.required, Validators.minLength(5)]],
      modelType: ['', [Validators.required]],
      modelCollection: ['', [Validators.required]],
      modelEmbroidery: ['', [Validators.required]],
      modelStamp: ['', [Validators.required]]
    });
  }

  create(): void {
    if(this.formModel.valid) {
      this.service.create(this.formModel.value).subscribe(() => {
        this.router.navigate(['/wm/model']);
        this.service.showMessage('Cadastro realizado com sucesso!', true);
      });
    } else {
      this.service.showMessage('Preencha todos os campos!', true);
    }
  }

  findAllCollection() {
    this.collectionService.findAll().subscribe((collections) => {
      this.listCollections = collections;
    })
  }
}
