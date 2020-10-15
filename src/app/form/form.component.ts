import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  frgrp = new FormGroup({
  	name: new FormControl('',Validators.required),
  	email: new FormControl('',Validators.required),
  	feedback: new FormControl('',Validators.required),
	comment: new FormControl('')
  });
  
  onSubmit() {
	console.warn(this.frgrp.value);
  }
}
