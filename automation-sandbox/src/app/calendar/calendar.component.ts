import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  calendarData: { date: string; event: string }[] = [];

  ngOnInit() {
    const recurringEvents = [
      { event: 'St Patrick\'s Day', month: 3, day: 17 },
      { event: 'Christmas Day', month: 12, day: 25 },
      { event: 'New Year\'s Day', month: 1, day: 1 },
    ];

    const currentYear = new Date().getFullYear();

    // Generate events for the next 10 years for each recurring event.
    for (let i = 0; i < 10; i++) {
      const year = currentYear + i;

      // Loop through each recurring event.
      for (const event of recurringEvents) {
        const eventDate = new Date(year, event.month - 1, event.day);
        const formattedDate = eventDate.toISOString().split('T')[0]; // Format as YYYY-MM-DD

        // Add the event to the calendar data.
        this.calendarData.push({ date: formattedDate, event: event.event });
      }
    }

    // Save the updated calendar data to Local Storage.
    localStorage.setItem('calendarData', JSON.stringify(this.calendarData));
  }
}
