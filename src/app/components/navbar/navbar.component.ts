import { Component } from '@angular/core';
import { FuncService } from 'src/app/services/func.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private FuncService:FuncService){

  }
  logOut(){
    this.FuncService.logOut();
  }
}
