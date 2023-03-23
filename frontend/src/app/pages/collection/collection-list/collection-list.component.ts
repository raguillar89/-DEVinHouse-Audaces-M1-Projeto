import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Collection } from 'src/app/interface/collection.interface';
import { CollectionService } from 'src/app/services/collection/collection.service';

@Component({
  selector: 'app-collection-list',
  templateUrl: './collection-list.component.html',
  styleUrls: ['./collection-list.component.scss']
})
export class CollectionListComponent implements OnInit{

  collection: Collection = new Collection();
  listCollections: Collection[] = [];

  //displayedColumns: string[] = ['Coleção', 'Responsável', 'Estação - Lançamento', 'Moelos', 'Orçamento'];
  //dataSource = new MatTableDataSource<Collection>(this.listCollections);

  //@ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: CollectionService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((collections) => {
      this.listCollections = collections;
      //this.dataSource = new MatTableDataSource<Collection>(collections);
      //this.dataSource.paginator = this.paginator;
    })
  }
}
