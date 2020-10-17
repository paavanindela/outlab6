import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SrsService } from '../srs.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit{

  constructor(private srsService: SrsService) { }
  public popup: boolean;
  private message: string;
  ngOnInit(): void {
	this.showForm();
  }
  frgrp = new FormGroup({
  	name: new FormControl('',Validators.required),
  	email: new FormControl('',Validators.required),
  	feedback: new FormControl('',Validators.required),
	comment: new FormControl('')
  });
  
  showForm() : void {
  this.srsService.getdata()
    .subscribe((data: any) => {
	this.frgrp.setValue({
		name: data.name,
		email: data.email,
		feedback: data.feedback,
		comment: data.comment
     	   });
	});
  }
  postForm() : void {
    this.srsService.postdata(this.frgrp.value)
	.subscribe(
		data => {console.log(data); this.message = "Succesfully posted form.";},
		error => {console.error('Error',error); this.message="Unable to post form."}
	);
  }
  onSubmit() {
            
    
	this.postForm();
  }
}
