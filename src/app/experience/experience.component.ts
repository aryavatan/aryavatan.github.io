import { Component, OnInit } from '@angular/core';
import data  from "../../assets/Data.json";

@Component({
	selector: 'app-experience',
	templateUrl: './experience.component.html',
	styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

	experiences: any;

	constructor() { }

	ngOnInit() {
		this.experiences = data.experiences;
	}

}
