import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-full-screen',
  templateUrl: './layout-full-screen.component.html',
  styleUrls: ['./layout-full-screen.component.scss']
})
export class LayoutFullScreenComponent implements OnInit {

  constructor(private router: Router){ }

  ngOnInit(): void {
    this.router.navigate(['wm/model']);
  }

}
