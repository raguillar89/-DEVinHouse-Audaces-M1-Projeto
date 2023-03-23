import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Collection } from 'src/app/interface/collection.interface';
import { CollectionService } from 'src/app/services/collection/collection.service';

@Component({
  selector: 'app-collection-register',
  templateUrl: './collection-register.component.html',
  styleUrls: ['./collection-register.component.scss']
})
export class CollectionRegisterComponent {

  collection: Collection = new Collection();
  formCollection!: FormGroup;

  constructor(private service: CollectionService, private router: Router) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formCollection = new FormGroup({
      collectionName: new FormControl('', [Validators.required, Validators.minLength(4)]),
      collectionResponsible: new FormControl('', [Validators.required, Validators.minLength(5)]),
      collectionSeason: new FormControl('', [Validators.required, Validators.minLength(5)]),
      collectionYear: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]),
      collectionModelQuatity: new FormControl('', [Validators.required, Validators.minLength(1)]),
      collectionBudget: new FormControl('', [Validators.required, Validators.minLength(1)])
    });
  }

  create(): void {
    this.service.create(this.collection).subscribe(() => {
      this.router.navigate(['/wm/collection']);
      this.service.showMessage('Cadastro realizado com sucesso!', true);
    });
  }
}
