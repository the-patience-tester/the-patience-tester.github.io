import { Component } from '@angular/core'
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { NavigationEnd, Router } from '@angular/router'
import * as jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent {
  showDownload: boolean = true
  constructor (private readonly router: Router) {}
  /// This is being used indirectly to determine if the download button should be shown.
  ngOnInit (): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = event.url
        console.log('Current Route: ', currentRoute)
        if (currentRoute !== '/') {
          this.showDownload = false
        } else {
          this.showDownload = true
        }
      }
    })
  }

  async OnDownloadPdfClick (): Promise<void> {
    const content = document.getElementById('main-cv')
    if (content !== null) {
      try {
        const canvas = await html2canvas(content)
        const imgData = canvas.toDataURL('image/png')
        // eslint-disable-next-line new-cap
        const pdf = new jsPDF.default('p', 'mm', 'a4')

        pdf.addImage(imgData, 'PNG', 0, 0, 210, 297) // 210x297 mm for A4 page size
        pdf.save('petersimonscv.pdf')
      } catch (error) {
        alert('Error: Could not create the PDF.')
      }
    } else {
      alert('Error: Could not find CV content to download.')
    }
  }

  async navigateToCalculator (): Promise<boolean> {
    return await this.router.navigate(['/LearnToAutomate'])
  }

  async navigateToLanding (): Promise<boolean> {
    return await this.router.navigate(['/'])
  }
}
