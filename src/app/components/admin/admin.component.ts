import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FuncService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  // jobIdToDelete!: number;
  // UserIdToDelete!: number;
  // newJobName!: string; 
  // userId!: number;
  // newRoleId!: number;

  constructor(
    private router: Router,
    private funcService: FuncService
  ) {}

  pendingRequests() {
    this.router.navigate(['/PendingRequests']);
  }

  GoToDeleteJob(){
    this.router.navigate(['/deleteJob']);
  }

  GoToDeleteUser(){

    this.router.navigate(['/deleteUser']);
  }

  Addjob(){
    this.router.navigate(['/addJob']); 
  }

  ChangeId(){
    this.router.navigate(['/changeId']);
  }
//DELETE JOB/POSITION
  // deleteJobPosition(): void {
  //   if (!this.jobIdToDelete) {
  //     console.error('Job ID is required for deletion.');
  //     return;
  //   }
  
  //   this.funcService.deleteJobPosition(this.jobIdToDelete).subscribe({
  //     next: (response) => {
  //       console.log(`Job position with ID ${this.jobIdToDelete} deleted successfully.`, response);
  //     },
  //     error: (error) => {
  //       console.error(`Error deleting job position with ID ${this.jobIdToDelete}: `, error);
  //     }
  //   });
  // }
//DELETE USER
  // deleteUser(): void {
  //   if (!this.UserIdToDelete) {
  //     console.error('User ID is required for deletion.');
  //     return;
  //   }
  
  //   this.funcService.deleteUser(this.UserIdToDelete).subscribe({
  //     next: (response) => {
  //       console.log(`User position with ID ${this.UserIdToDelete} deleted successfully.`, response);
  //     },
  //     error: (error) => {
  //       console.error(`Error deleting User with ID ${this.UserIdToDelete}: `, error);
  //     }
  //   });
  // }
  
//ADD NEW JOB
// addNewJob(): void {
//   if (!this.newJobName) {
//     console.error('Job name is required for adding a new job.');
//     return;
//   }

//   const jobDto = { title: this.newJobName };

//   this.funcService.addJobPosition(jobDto).subscribe({
//     next: (response) => {
//       console.log(`New job "${this.newJobName}" added successfully.`, response);
//     },
//     error: (error) => {
//       console.error(`Error adding a new job "${this.newJobName}": `, error);
//     },
//   });
// }
  


// changeUserRole() {
//   this.funcService.changeUserRole(this.userId, this.newRoleId).subscribe({
//    next: (response) => {
//       console.log(response);
//     },
//    error: (error) => {
//       console.error(error);
//     },
//   }
//     );
// }


}

