import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuncService } from 'src/app/services/func.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  constructor(private router: Router){}

  pendingRequests(){
    this.router.navigate(['/PendingRequests']);
  }
}
