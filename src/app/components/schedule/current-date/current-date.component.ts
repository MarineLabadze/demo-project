import { Component } from '@angular/core';

@Component({
  selector: 'app-current-date',
  templateUrl: './current-date.component.html',
  styleUrls: ['./current-date.component.css']
})
export class CurrentDateComponent {
  getCurrentDate(): string {
    const currentDate = new Date();
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
    // Display the current date (Month Day)
    const currentDateString = `${monthNames[currentDate.getMonth()]} ${currentDate.getDate()-1}`;

    // Display the date of the week's beginning (Month Day)
    const weekStartDate = new Date(currentDate);
    weekStartDate.setDate(currentDate.getDate() - currentDate.getDay());
    const weekStartDateString = `${monthNames[weekStartDate.getMonth()]} ${weekStartDate.getDate()}`;

    // Display the week number
    const currentWeekNumber = this.getWeekNumber(currentDate);
    
    return `${currentDateString}`;
  }
  
  private getWeekNumber(date: Date): number {
    const currentDate = new Date(date.getTime());
    currentDate.setHours(0, 0, 0, 0);
    currentDate.setDate(currentDate.getDate() + 4 - (currentDate.getDay() || 7));

    const yearStart = new Date(currentDate.getFullYear(), 0, 1);
    
    // Explicitly cast to number
    const weekNumber = Math.ceil((((currentDate.getTime() - yearStart.getTime()) / 86400000) + 1) / 7) as number;

    return weekNumber;
  }
}
