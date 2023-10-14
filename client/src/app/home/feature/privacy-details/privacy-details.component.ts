import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from "../../ui/contact/contact.component";

@Component({
    selector: 'app-privacy-details',
    standalone: true,
    template: `
    <p>
      privacy-details works!
    </p>
    <contact></contact>
  `,
    styleUrls: ['./privacy-details.component.css'],
    imports: [CommonModule, ContactComponent]
})
export class PrivacyDetailsComponent implements OnInit {

    constructor() { }

    ngOnInit() {
      console.warn('Privacy details component loaded')
    }

}
