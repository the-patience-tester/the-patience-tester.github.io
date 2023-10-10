import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent {
  constructor(private router: Router) {}

  OnDownloadPdfClick() {
    const content = document.getElementById('main-cv');
    if (content !== null) {
      html2canvas(content).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF.default('p', 'mm', 'a4');

        pdf.addImage(imgData, 'PNG', 0, 0, 210, 297); // 210x297 mm for A4 page size
        pdf.save('petersimonscv.pdf');
      });
    }
    else {
      alert('Error: Could not find CV content to download.');
    }
  }

  navigateToCalculator() {
    this.router.navigate(['/calculator']);
  }
}
