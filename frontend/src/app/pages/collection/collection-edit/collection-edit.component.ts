import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  constructor(private service: CollectionService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.collection.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.createForm();
  }

  createForm() {
    this.formCollection = new FormGroup({
      collectionName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      collectionResponsible: new FormControl('', [Validators.required, Validators.minLength(5)]),
      collectionSeason: new FormControl('', [Validators.required, Validators.minLength(5)]),
      collectionYear: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
      collectionBrand: new FormControl('', [Validators.required, Validators.minLength(4)]),
      collectionBudget: new FormControl('', [Validators.required, Validators.minLength(1)])
    });
  }

  findById(): void {
    this.service.findById(this.collection.id).subscribe(collection => {
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

}
