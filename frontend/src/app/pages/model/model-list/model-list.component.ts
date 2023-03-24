import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Model } from 'src/app/interface/model.interface';
import { ModelService } from 'src/app/services/model/model.service';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.scss']
})
export class ModelListComponent  implements OnInit{

  model: Model = new Model();
  listModels: Model[] = [];

  displayedColumns: string[] = ['ModeloID', 'Nome do Modelo', 'Responsável', 'Coleção'];
  dataSource = new MatTableDataSource<Model>(this.listModels);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private service: ModelService, private router: Router) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe((models) => {
      this.listModels = models;
      this.dataSource = new MatTableDataSource<Model>(models);
      this.dataSource.paginator = this.paginator;
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  redirect(id: any) {
    this.router.navigate([`wm/model/edit/${id}`]);
  }

}
