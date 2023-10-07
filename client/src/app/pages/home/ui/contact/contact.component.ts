import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'contact',
  imports: [],
  template: `
    <h3>Contact Loaded</h3>
  `,
  styles: [``]
})
export class ContactComponent implements OnInit  {

  constructor() { }

  ngOnInit() {
    console.warn('Contact component loaded')
  }

}
