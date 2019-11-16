import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  total = 0.00;
  venmoRecipient = 'jstoutenburg';

  constructor() {}

  venmoUrl() {
    const url = `venmo://paycharge?recipients=${this.venmoRecipient}&amount=${this.total.toFixed(2)}&note=Sandwich+Club`;
    console.log(url);
    return url;
  }
}
