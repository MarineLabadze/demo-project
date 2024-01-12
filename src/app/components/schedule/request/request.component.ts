import { Component } from '@angular/core';
import { FuncService } from 'src/app/services/func.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
  constructor(private FuncService: FuncService) { }

  // Add a new property to store the selected date and shift
  selectedDate: string = '';
  selectedShift: string = '';

  private decodeToken(token: any): any {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      console.error('Error decoding JWT token', e);
      return null;
    }
  }

  // Function to handle adding a schedule
  addSchedule(): void {
    if (!this.selectedDate || !this.selectedShift) {
      console.error('Please select both date and shift before adding schedule.');
      return;
    }
    
    // Determine start and end time based on the selected shift
    const selectedDate = new Date(this.selectedDate);
    const startTime = this.selectedShift === 'Morning'
      ? new Date(selectedDate.setHours(8, 0, 0)).toISOString()
      : new Date(selectedDate.setHours(16, 0, 0)).toISOString();

    const endTime = this.selectedShift === 'Evening'
      ? new Date(selectedDate.setHours(16, 0, 0)).toISOString()
      : new Date(selectedDate.setDate(selectedDate.getDate() + 1)).toISOString(); // Add 1 day for evening shift

    const token = localStorage.getItem('token');
    const decodedToken = this.decodeToken(token);
    const userID = decodedToken?.['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];

    // Construct the userData object
    const userData = {
      startTime: startTime,
      endTime: endTime,
      userId: userID
    };

    console.log(startTime);
    console.log(endTime);

    // Send schedule request
    this.FuncService.sendRequest(userData).subscribe({
      next: (response) => {
        console.log('Schedule request sent successfully:', response);
      },
      error: (error) => {
        console.error('Error sending schedule request: ', error);
      },
    });
  }
}
