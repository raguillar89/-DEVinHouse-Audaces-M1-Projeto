import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Collection } from 'src/app/interface/collection.interface';
import { CollectionService } from 'src/app/services/collection/collection.service';

@Component({
  selector: 'app-collection-register',
  templateUrl: './collection-register.component.html',
  styleUrls: ['./collection-register.component.scss']
})
export class CollectionRegisterComponent implements OnInit {

  collection: Collection = new Collection();
  formCollection!: FormGroup;

  constructor(private service: CollectionService, private router: Router, private fB: FormBuilder) {}

  ngOnInit(): void {
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

  create(): void {
    if(this.formCollection.valid) {
      this.service.create(this.formCollection.value).subscribe(() => {
        this.router.navigate(['/wm/collection']);
        this.service.showMessage('Cadastro realizado com sucesso!', true);
      });
    } else {
      this.service.showMessage('Preencha todos os campos!', true);
    }
  }
}
