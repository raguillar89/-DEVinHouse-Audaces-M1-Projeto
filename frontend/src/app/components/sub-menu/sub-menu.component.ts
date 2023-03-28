import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit{

  constructor(private router: Router, private service: UserService){ }

  ngOnInit(): void {}

  logout() {
    localStorage.removeItem('status');
    localStorage.removeItem('login');
    localStorage.removeItem('nome');
    localStorage.removeItem('userName');
    this.service.showMessage('Logout realizado com sucesso!', true);
    this.router.navigate(['login']);
  }
}
