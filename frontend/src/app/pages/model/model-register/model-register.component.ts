import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  constructor(private service: ModelService, private router: Router, private collectionService: CollectionService) {}

  ngOnInit(): void {
    this.createForm();
    this.findAllCollection();
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

  create(): void {
    this.service.create(this.model).subscribe(() => {
      this.router.navigate(['/wm/model']);
      this.service.showMessage('Cadastro realizado com sucesso!', true);
    });
  }

  findAllCollection() {
    this.collectionService.findAll().subscribe((collections) => {
      this.listCollections = collections;
    })
  }
}
