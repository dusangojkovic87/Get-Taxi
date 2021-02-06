import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm:any;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      Name:["",Validators.required],
      Surname:["",Validators.required],
      Email:["",Validators.required],
      Password:["",Validators.required]
    })
  }

  register(){
    console.log(this.registerForm.value);
  }

}
