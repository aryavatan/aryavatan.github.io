import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import data from "../../assets/Data.json";
import { ProjectService } from '../project.service';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

	allProjects: any;
	projects: any;
	filters: any;
	selectedFilter: any;

	constructor(private router: Router, private projectService: ProjectService) { }

	ngOnInit() {
		this.allProjects = data.projects.sort((proj1, porj2) => {
			if(proj1.name.toLowerCase() > porj2.name.toLowerCase()){
				return 1;
			}
			if(proj1.name.toLowerCase() < porj2.name.toLowerCase()){
				return -1
			}
			return 0;
		});
		this.projects = JSON.parse(JSON.stringify(this.allProjects)); // Make deep copy

		this.getFilterSkills();  // Extract Skills from the projects

		let filterRequest;
		if((filterRequest = localStorage.getItem('filter')) != null){
			localStorage.removeItem('filter');  // Remove filter from local storage
			this.filters.forEach(filter => {
				if(filter.name == filterRequest){
					this.filterSelected(filter);
					return;
				}
			});
		}
	}

	projectClicked(project) {
		this.projectService.setSelectedProject(project);
		this.router.navigate(['projects/project-details']);
	}

	getFilterSkills() {
		this.selectedFilter = 'selected';  // This will initially select "Show All" option
		this.filters = this.projectService.getFilterSkills();
	}

	filterSelected(filter){		
		// First unselect previous filter
		if(this.selectedFilter != undefined && this.selectedFilter != 'selected'){
			this.selectedFilter.class = "";
		}
		
		// If "Show All" is clicked, reload all projects, change selectedFilter so "Show All" button is active
		if(filter.name == 'Show All'){
			this.selectedFilter = 'selected'
			this.projects = JSON.parse(JSON.stringify(this.allProjects));
			return;
		}

		// Select the filter so the button looks selected
		filter.class = "selected";
		this.selectedFilter = filter;

		// Get projects that match filter from master list
		let filteredProjects  = [];
		this.allProjects.forEach(project => {
			if(project.skills.includes(filter.name)){
				filteredProjects.push(project);
			}
		});
		this.projects = filteredProjects;  // Assign to data-binded projects variable

		console.log(this.selectedFilter);
	}

}
