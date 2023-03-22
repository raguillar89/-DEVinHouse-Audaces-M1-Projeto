import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit{

  constructor(private router: Router, private service: UserService){ }

  ngOnInit(): void { }

  logout() {
    localStorage.removeItem('status');
    localStorage.removeItem('login');
    localStorage.removeItem('nome');
    this.service.showMessage('Logout realizado com sucesso!', true);
    this.router.navigate(['login']);
  }
}
