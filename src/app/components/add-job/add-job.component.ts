import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FuncService } from 'src/app/services/user.service';
@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent {

  newJobName!: string; 

  constructor(
    private router: Router,
    private funcService: FuncService
  ) {}

  addNewJob(): void {
    if (!this.newJobName) {
      console.error('Job name is required for adding a new job.');
      return;
    }
  
    const jobDto = { title: this.newJobName };
  
    this.funcService.addJobPosition(jobDto).subscribe({
      next: (response) => {
        console.log(`New job "${this.newJobName}" added successfully.`, response);
      },
      error: (error) => {
        console.error(`Error adding a new job "${this.newJobName}": `, error);
      },
    });
  }

  GoToAdmin(){
    this.router.navigate(['/admin']);
  }
}
