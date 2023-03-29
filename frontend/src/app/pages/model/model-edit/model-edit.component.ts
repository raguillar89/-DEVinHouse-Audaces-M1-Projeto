import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Collection } from 'src/app/interface/collection.interface';
import { Model } from 'src/app/interface/model.interface';
import { CollectionService } from 'src/app/services/collection/collection.service';
import { ModelService } from 'src/app/services/model/model.service';

@Component({
  selector: 'app-model-edit',
  templateUrl: './model-edit.component.html',
  styleUrls: ['./model-edit.component.scss']
})
export class ModelEditComponent implements OnInit {

  model: Model = new Model();
  formModel!: FormGroup;
  collection: Collection = new Collection();
  listCollections: Collection[] = [];
  listModels: Model[] = [];

  constructor(private service: ModelService, private router: Router, private route: ActivatedRoute, private collectionService: CollectionService, private fB: FormBuilder) {}

  ngOnInit(): void {
    this.model.id = this.route.snapshot.paramMap.get('id');
    this.findById();
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

  findById(): void {
    this.service.findById(this.model.id).subscribe(model => {
      this.model = model;
      this.formModel.patchValue(this.model);
    });
  }

  update(): void {
    this.model.modelName = this.formModel.value.modelName;
    this.model.modelResponsible = this.formModel.value.modelResponsible;
    this.model.modelType = this.formModel.value.modelType;
    this.model.modelCollection = this.formModel.value.modelCollection;
    this.model.modelEmbroidery = this.formModel.value.modelEmbroidery;
    this.model.modelStamp = this.formModel.value.modelStamp;

    if(!this.formModel.valid){
      this.service.showMessage('Preencha todas as informações', true);
    } else {
      this.service.update(this.model).subscribe(() => {
        this.service.showMessage('Coleção Atualizada com Sucesso!', true);
        this.router.navigate(['wm/model']);
      })
    }
  }

  delete(): void {
    if(this.formModel.valid) {
      this.service.delete(this.model.id).subscribe(() => {
        this.service.showMessage('Coleção Excluída com Sucesso!', true);
        this.router.navigate(['wm/model']);
      })
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
