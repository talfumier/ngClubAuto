import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private router:Router) {}
  ngOnInit(): void {
    this.router.navigate(['']);//Make sure home page is displayed after page reload
  }
}
