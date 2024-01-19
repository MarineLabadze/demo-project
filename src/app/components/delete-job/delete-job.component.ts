import { Component } from '@angular/core';
import { FuncService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delete-job',
  templateUrl: './delete-job.component.html',
  styleUrls: ['./delete-job.component.css']
})
export class DeleteJobComponent {

  jobIdToDelete!: number;
  constructor(
    private router: Router,
    private funcService: FuncService
  ) {}
  deleteJobPosition(): void {
    if (!this.jobIdToDelete) {
      console.error('Job ID is required for deletion.');
      return;
    }
  
    this.funcService.deleteJobPosition(this.jobIdToDelete).subscribe({
      next: (response) => {
        console.log(`Job position with ID ${this.jobIdToDelete} deleted successfully.`, response);
      },
      error: (error) => {
        console.error(`Error deleting job position with ID ${this.jobIdToDelete}: `, error);
      }
    });
  }

  GoToAdmin(){
    this.router.navigate(['/admin']);
  }
}
