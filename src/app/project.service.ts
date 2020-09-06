import { Injectable } from '@angular/core';
import data from "../assets/Data.json";

@Injectable({
	providedIn: 'root'
})
export class ProjectService {

	selectedProject: any;

	constructor() { }

    // Gets entire project from a project id
    getProject (projectId) {
        data.projects.forEach(project => {
            if(project.id === projectId) {
                this.selectedProject = project;
            }
        });

        for (let i = 0; i < this.selectedProject.pictures.length; i++) {
			this.selectedProject.pictures[i].show = "none";
			this.selectedProject.pictures[i].opacity = 0.6;
        }
        
        return this.selectedProject;
    }

	// Generate and return a list of filters for projects
	getFilterSkills() {
		let list = [];

		data.projects.forEach(project => {
			project.skills.forEach(skill => {
				let duplicate = false;

				list.forEach(filter => {
					if(filter.name == skill){
						duplicate = true;
					}
				})

				if (!duplicate) {
					list.push({name:skill, class:""});
				}
			})
		});

		return list.sort((a, b) => {
			if(a.name > b.name){
				return 1;
			}
			else if(a.name < b.name){
				return -1;
			}
			else {
				return 0;
			}
		});
	}

	// Check if skill is in filters
	doesSkillHaveProjects(skill){
		let filters = this.getFilterSkills();
		let hasProjects = false;
		
		filters.forEach(filter => {
			if(filter.name == skill){
				hasProjects = true;
				return true;
			}
		});

		return hasProjects;
	}
}
