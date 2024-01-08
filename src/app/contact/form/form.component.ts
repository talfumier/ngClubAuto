import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Props } from '../input/props';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent { 
  private _props:{inputs:Props[],textarea:Props} ;
  constructor(private toastService:ToastService) { 
    const fields:Props[]= [
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
      },
      {
        field:"message",
        type:"textarea",
        label:"message",
      }
    ]; 
    const x= fields.pop() as Props;
    this._props={inputs:fields,textarea:x};
  } 
  get props (){
    return this._props;
  }
  submit(f:NgForm) {
    if(!f.valid) return;
    this.toastService.toastSuccess("Votre formulaire de contact a été transmis avec succès !");    
  } 
}

