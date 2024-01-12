import { Component, OnInit } from '@angular/core';
import { FuncService } from 'src/app/services/func.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  jobOptions: any[] = [];
  days: string[] = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  dates: string[] = [];
  currentWeekStartDate!: Date;
  

  constructor(private FuncService: FuncService) {}

  ngOnInit(): void {
    this.initializeDates();
    this.fetchJobOptions();
  }

  initializeDates(): void {
    // Get the current date
    const currentDate = new Date();
    
    // Set the currentWeekStartDate to the beginning of the current week (Sunday)
    this.currentWeekStartDate = new Date(currentDate);
    this.currentWeekStartDate.setDate(currentDate.getDate() - currentDate.getDay());

    // Initialize dates array based on the current week
    for (let i = 0; i < 7; i++) {
      const date = new Date(this.currentWeekStartDate);
      date.setDate(date.getDate() + i);
      this.dates.push(`${this.getMonthAbbreviation(date.getMonth())} ${date.getDate()}`);
    }
  }

  getMonthAbbreviation(month: number): string {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return months[month];
  }

  fetchJobOptions(): void {
    this.FuncService.getJobOptions().subscribe({
      next: (response) => {
        console.log('Job options:', response);
        this.jobOptions = response;
      },
      error: (error) => {
        console.error('Error fetching job options: ', error);
      },
    });
  }
  

  navigateWeek(offset: number): void {
    // Update the currentWeekStartDate based on the offset
    this.currentWeekStartDate.setDate(this.currentWeekStartDate.getDate() + offset);

    // Update the dates array based on the new week
    this.dates = [];
    for (let i = 0; i <7; i++) {
      const date = new Date(this.currentWeekStartDate);
      date.setDate(date.getDate() + i);
      this.dates.push(`${this.getMonthAbbreviation(date.getMonth())} ${date.getDate()}`);
    }

    // Fetch job options for the new week
    this.fetchJobOptions();
  }
}
