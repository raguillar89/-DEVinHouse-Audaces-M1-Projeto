import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { API_CONFIG } from 'src/app/environments/environments';
import { Collection } from 'src/app/interface/collection.interface';
import { Model } from 'src/app/interface/model.interface';
import { CollectionService } from 'src/app/services/collection/collection.service';
import { ModelService } from 'src/app/services/model/model.service';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss']
})
export class CollectionListComponent implements OnInit{

  collection: Collection = new Collection();
  listCollections: Collection[] = [];
  model: Model = new Model();
  listModels: Model[] = [];

  displayedColumns: string[] = ['Coleção', 'Responsável', 'Estação - Lançamento', 'Modelos', 'Orçamento'];
  dataSource = new MatTableDataSource<Collection>(this.listCollections);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: CollectionService, private modelService: ModelService, private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.findAll();
    this.findAllModels();
    this.getCollections();
  }

  findAll() {
    this.service.findAll().subscribe((collections) => {
      this.listCollections = collections;
      this.dataSource = new MatTableDataSource<Collection>(collections);
      this.dataSource.paginator = this.paginator;
    })
  }

  findAllModels() {
    this.modelService.findAll().subscribe((models) => {
      this.listModels = models;
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  redirect(id: any) {
    this.router.navigate([`wm/collection/clEdit/${id}`]);
  }

  getCollections() {
    /*let colecoesModificadas = []

    for (let i = 0; i <= this.listCollections.length; i++) {
      const modelosColecao = this.listModels.map(q => q.id === this.collection.id)
      const obj = {
        qtdModelos: modelosColecao.length
      }

      colecoesModificadas.push(obj)
    }
    console.log(colecoesModificadas);

    return colecoesModificadas*/
  }
}
