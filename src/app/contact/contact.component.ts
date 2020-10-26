import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

	statusDisplay : any;  // Bool for activating status message
	statusAnimation : any;  // String for activating animation of status message
	statusClass : any;  // String for selecting the class of status message (success or error)
	statusText : any;  // Text inside of status message

	constructor(private http : HttpService) { }

	ngOnInit() {
		this.statusDisplay = false;
	}

	async formSubmit(contactForm){
		let name = contactForm.value.name;
		let email = contactForm.value.email;
		let message = contactForm.value.message;		

		if (!name || !email || !message){
			this.statusClass = 'error';
			this.statusText = 'Oops, something went wrong...';
		}
		else {
			await this.http.postContactMessage(name, email, message).then(() => {
				this.statusClass = 'success';
				this.statusText = 'Sent!';
			}).catch(error => {
				if(error){
					console.log(error);
					this.statusClass = 'error';
					this.statusText = 'Oops, something went wrong...';
				}
			});
		}

		this.activateStatusMessage();
	}
	
	activateStatusMessage() {
		this.statusDisplay = true;
		this.statusAnimation = "auto";
		setTimeout(() => {
			this.statusAnimation = "";
		}, 100);
	}
}
