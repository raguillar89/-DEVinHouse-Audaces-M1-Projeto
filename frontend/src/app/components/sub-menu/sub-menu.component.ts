import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit{

  user: User = new User();
  listUsers: User[] = [];

  constructor(private router: Router, private service: UserService){ }

  ngOnInit(): void {
    this.findAll();
  }

  logout() {
    localStorage.removeItem('status');
    localStorage.removeItem('login');
    localStorage.removeItem('nome');
    localStorage.removeItem('userName');
    localStorage.removeItem('userId');
    this.service.showMessage('Logout realizado com sucesso!', true);
    this.router.navigate(['login']);
  }

  redirect(id: any) {
    this.router.navigate([`wm/userEdit/${localStorage.getItem('userId')}`]);
  }

  findAll() {
    this.service.findAll().subscribe((users) => {
      this.listUsers = users
      console.log(this.listUsers)
      console.log(this.user)
    })
  }
}
