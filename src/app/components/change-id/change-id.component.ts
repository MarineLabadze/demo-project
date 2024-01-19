import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FuncService } from 'src/app/services/user.service';
@Component({
  selector: 'app-change-id',
  templateUrl: './change-id.component.html',
  styleUrls: ['./change-id.component.css']
})
export class ChangeIdComponent {

  userId!: number;
  newRoleId!: number;

  constructor(
    private router: Router,
    private funcService: FuncService
  ) {}

  changeUserRole() {
    this.funcService.changeUserRole(this.userId, this.newRoleId).subscribe({
     next: (response) => {
        console.log(response);
      },
     error: (error) => {
        console.error(error);
      },
    }
      );
  }

  GoToAdmin(){
    this.router.navigate(['/admin']);
  }
}
