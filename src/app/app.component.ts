import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title :string= 'ClubAuto';
  isMobile :boolean=true;

  ngOnInit() {
      this.isMobile=window.innerWidth<=576;
      console.log(this.isMobile,window.innerWidth,window.outerWidth);
      
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.ngOnInit();
  }

}
