import { Component,Input, OnInit,ViewChild,ElementRef } from '@angular/core';
import { NgModel,ControlContainer, NgForm } from '@angular/forms';
import { Props } from './props';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css',
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ] //passing input fields data to the form parent element
})

export class InputComponent implements OnInit {
  @Input() props:Props={} as Props;

  @ViewChild("input,textarea") inputField: ElementRef = {} as ElementRef;
  ngAfterViewInit() {
    if(this.props.autofocus) this.inputField.nativeElement.focus();
  }

  private _error:string="";
  
  ngOnInit(): void {
    if(this.props.type==="email") this.props.pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    if(!this.props.required) this.props.required=false;
    if(!this.props.min) this.props.min=0;
  }

  setValidationError(model:NgModel):void{
    if(model.control.pristine || !model.control?.errors) this._error="";
    else{
      const error=Object.keys(model.control.errors)[0];
      switch(error){
        case "required":
          this._error= `Le champs ${this.props.label} ne peut pas être vide !`;
          break;
        case "minlength":
          this._error= `Le champs ${this.props.label} doit avoir au moins ${model.control.errors[error].requiredLength} caractères !`;
          break;
        case "pattern":
          this._error=`L'adresse ${this.props.label} saisie est invalide !`
          break;
        default:
          this._error=`Le champs ${this.props.label} ne peut pas être validé dans l'état !`      }
    }
  }
  get error(){
    return this._error;
  }
}