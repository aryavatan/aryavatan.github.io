import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	constructor() { }

	// Data binded variables
	name: string = '';
	email: string = '';
	subject: string = '';
	message: string = '';

	ngOnInit() {
	}

	contactMe(form: NgForm){
		console.log(form);
	}

}
