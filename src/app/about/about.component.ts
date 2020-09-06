import { Component, OnInit } from '@angular/core';
import data from '../../assets/Data.json';
import { Router } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
	selector: 'app-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

	skills: Object;

	constructor(private router: Router, private projectService: ProjectService) { }

	ngOnInit() {
		this.initSkills();
	}

	initSkills() {
		let list = [];
		data.skills.sort().forEach(skill => {
			let hasProject = this.projectService.doesSkillHaveProjects(skill) ? "has-project" : "";
			list.push({ name: skill, class: hasProject });
		});

		this.skills = list;
	}

	// If skill that has projects is clicked, route to projects w/ that skill as the filter
	skillClicked(skill) {
		if (skill.class == "has-project") {
			this.router.navigate(
                ['/projects'],
                { 
                    queryParams: { 
                        filter: skill.name
                    }, 
                }
            );
		}
	}
}
