import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Collection } from 'src/app/interface/collection.interface';
import { CollectionService } from 'src/app/services/collection/collection.service';

@Component({
  selector: 'app-collection-edit',
  templateUrl: './collection-edit.component.html',
  styleUrls: ['./collection-edit.component.scss']
})
export class CollectionEditComponent implements OnInit {

  collection: Collection = new Collection();
  formCollection!: FormGroup;

  constructor(private service: CollectionService, private router: Router, private route: ActivatedRoute, private fB: FormBuilder) {}

  ngOnInit(): void {
    this.collection.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.createForm();
  }

  createForm() {
    this.formCollection = this.fB.group({
      collectionName: [this.collection.collectionName, [Validators.required, Validators.minLength(4)]],
      collectionResponsible: [this.collection.collectionResponsible, [Validators.required, Validators.minLength(5)]],
      collectionSeason: [this.collection.collectionSeason, [Validators.required, Validators.minLength(5)]],
      collectionYear: [this.collection.collectionYear, [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      collectionBrand: [this.collection.collectionBudget, [Validators.required, Validators.minLength(4)]],
      collectionBudget: [this.collection.collectionBudget, [Validators.required, Validators.minLength(1)]]
    });
  }

  findById(): void {
    this.service.findById(this.collection).subscribe(collection => {
      this.collection = collection;
    });
  }

  update(): void {
    this.service.update(this.collection).subscribe(() => {
      this.service.showMessage('Coleção Atualizada com Sucesso!', true);
      this.router.navigate(['wm/collection']);
    })
  }

  delete(): void {
    this.service.delete(this.collection.id).subscribe(() => {
      this.service.showMessage('Coleção Excluída com Sucesso!', true);
      this.router.navigate(['wm/collection']);
    })
  }

  /*
   constructor(private service: CollectionService, private router: Router, private route: ActivatedRoute, private fB: FormBuilder) {}

  ngOnInit(): void {
    this.collection.id = this.route.snapshot.paramMap.get('id');
    this.findById(this.collection.id);
    this.createForm();
  }

  createForm() {
    this.formCollection = this.fB.group({
      collectionName: ['', [Validators.required, Validators.minLength(4)]],
      collectionResponsible: ['', [Validators.required, Validators.minLength(5)]],
      collectionSeason: ['', [Validators.required, Validators.minLength(5)]],
      collectionYear: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      collectionBrand: ['', [Validators.required, Validators.minLength(4)]],
      collectionBudget: ['', [Validators.required, Validators.minLength(1)]]
    });
  }

  findById(id: any) {
    this.service.findById(this.collection.id).subscribe((collection: Collection) => {
      this.updateCollection(collection);
      this.collection = collection;
    });
  }

  updateCollection(collection: Collection) {
    this.formCollection.patchValue({
      collectionName: collection.collectionName,
      collectionResponsible: collection.collectionResponsible,
      collectionSeason: collection.collectionSeason,
      collectionYear: collection.collectionYear,
      collectionBrand: collection.collectionBrand,
      collectionBudget: collection.collectionBudget
    })
  }

  update(): void {
    if(this.formCollection.valid){
      this.mapFormValuesToCollection();
      this.service.update(this.formCollection.value).subscribe(() => {
        this.service.showMessage('Coleção Atualizada com Sucesso!', true);
        this.router.navigate(['wm/collection']);
      })
    } else {
      this.service.showMessage('Preencha todos os campos!', true);
    }
  }

  mapFormValuesToCollection() {
    this.collection.collectionName = this.formCollection.value.collectionName;
    this.collection.collectionResponsible = this.formCollection.value.collectionResponsible;
    this.collection.collectionSeason = this.formCollection.value.collectionSeason;
    this.collection.collectionYear = this.formCollection.value.collectionYear;
    this.collection.collectionBrand = this.formCollection.value.collectionBrand;
    this.collection.collectionBudget = this.formCollection.value.collectionBudget;
  }
  */
}
