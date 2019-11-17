import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  total = 0.00;
  venmoRecipient = 'jstoutenburg';
  venmoUrl: SafeUrl;

  constructor(
    private sanitizer: DomSanitizer
  ) {}

  buildVenmoUrl() {
    const url = this.sanitizer.bypassSecurityTrustUrl(
      `venmo://paycharge?recipients=${this.venmoRecipient}&amount=${this.total.toFixed(2)}&note=Sandwich+Club`
    );
    console.log(url);
    return url;
  }

  updateTotal(total: number) {
    this.total = total;
    this.venmoUrl = this.buildVenmoUrl();
  }
}
