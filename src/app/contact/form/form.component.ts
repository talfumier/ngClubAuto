import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  constructor(private toastService:ToastService) {}
  private _inputProps:Props[]=[
    {
      field:"firstName",
      type:"text",
      label:"prénom",
      required:true,
      min:3,
      autofocus:true,
    },
    {
      field:"lastName",
      type:"text",
      label:"nom",
      required:true,
      min:3,
    },
    {
      field:"email",
      type:"email",
      label:"email",
      required:true,
      min:7,
    },
    {
      field:"phone",
      type:"text",
      label:"téléphone",
    }
  ];
  get inputProps (){
    return this._inputProps;
  }
  private _message_props = {
    field:"message",
    type:"textarea",
    label:"message",
  }
  get message_props (){
    return  this._message_props;
  }
  submit(f:NgForm) {
    if(!f.valid) return;
    this.toastService.toastSuccess("Votre formulaire de contact a été transmis avec succès !");    
  } 

}
export interface Props {
  field:string,
  type:string,
  label:string,
  required?:boolean,
  min?:number,
  pattern?:string,
  autofocus?:boolean
}
