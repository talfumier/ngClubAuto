import { Component,Input, OnInit } from '@angular/core';
import { Details } from '../../services/details';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.css'
})
export class TabsComponent implements OnInit {
  @Input({alias:"data"}) details:Details={}as Details;
  private _tabs:string[]=[];
  private active:boolean[]=[];
  private contents:any[]=[];
 
  ngOnInit(): void { 
    const keys= Object.keys(this.details);  
    this._tabs=keys;
    this.active=Array.from({length: keys.length}, (item,i) => item = i!==0?false:true);
    this.contents=Object.values(this.details);
  }
  get tabs(){
    return this._tabs;
  }
  handleClick(idx:number):void{
    if(this.getTabStatus(idx)) return;
    this.active.map((item,i) => {
      if(i===idx)this.active[idx]=!item;
      else this.active[i]=false;
    })
  }  
  getTabStatus(idx:number):boolean{
    return this.active[idx];
  } 
  getActiveTabContent():number{
    return this.contents[this.active.indexOf(true)];
  }
}
