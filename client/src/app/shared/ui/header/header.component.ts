import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  toggleMobile: boolean = false;
  myButton: any;

  ngOnInit(): void {
    this.myButton = document.getElementById("btn-back-to-top");
    window.addEventListener('scroll', this.scroll, true);
  }

  scroll = (event: any): void => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.myButton.style.display = "block";
    } else {
      this.myButton.style.display = "none";
    }
  }

  onNavbarToggle(): void {
    this.toggleMobile = !this.toggleMobile;
  }
  
  scrollToTop(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }
  
}
