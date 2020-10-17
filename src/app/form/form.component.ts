import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  constructor(private fb: FormBuilder) { }
  profileForm = this.fb.group({
  Name: ['', Validators.required],
  Email: ['', Validators.required],
  Feedback: ['', Validators.required],
  Comments: ['']
});


/*
=======
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
>>>>>>> 13a2f85991b9b7f3757b5e6462823b4c256ad2ab*/
}
