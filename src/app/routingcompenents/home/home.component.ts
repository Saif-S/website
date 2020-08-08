import { Component, OnInit, HostListener } from '@angular/core';
import typer from 'typer-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    const element = document.querySelector('.typer')
   typer(element,200)
    .line('business').back(8)
    .line('banking').back(7)
    .line('automation').back(10)
    .line('you.')
  .cursor({block: false, blink: 'soft'});
  }
  isShow: boolean;
  topPosToStartShowing = 100;
  @HostListener('window:scroll')
  

  
  checkScroll() {
   const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
  // TODO: Cross browsing
  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
    
  }
  scrollToElement(element): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
}
}
