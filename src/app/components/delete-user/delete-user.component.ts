import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FuncService } from 'src/app/services/user.service';
@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent {

  UserIdToDelete!: number;

  constructor(
    private router: Router,
    private funcService: FuncService
  ) {}

  deleteUser(): void {
    if (!this.UserIdToDelete) {
      console.error('User ID is required for deletion.');
      return;
    }
  
    this.funcService.deleteUser(this.UserIdToDelete).subscribe({
      next: (response) => {
        console.log(`User position with ID ${this.UserIdToDelete} deleted successfully.`, response);
      },
      error: (error) => {
        console.error(`Error deleting User with ID ${this.UserIdToDelete}: `, error);
      }
    });
  }
  GoToadmin(){
    this.router.navigate(['/admin']);
  }

}
