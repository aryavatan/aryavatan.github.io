import { Injectable } from '@angular/core';
import data from "../assets/Data.json";

@Injectable({
	providedIn: 'root'
})
export class ProjectService {

	selectedProject: any;

	constructor() { }

    // Gets all projects, sorted alphabetically
    getAllProjects() {
        return data.projects.sort((proj1, porj2) => {
			if(proj1.name.toLowerCase() > porj2.name.toLowerCase()){
				return 1;
			}
			if(proj1.name.toLowerCase() < porj2.name.toLowerCase()){
				return -1
			}
			return 0;
		});
    }

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

    // Gets list of projects based on filter name
    getFilteredProjects(filterName) {
        if (filterName == ''){
            return this.getAllProjects();
        }
        
        // Get projects that match filter from master list
		let filteredProjects  = [];
		this.getAllProjects().forEach(project => {
			if(project.skills.includes(filterName)){
				filteredProjects.push(project);
			}
		});
		return filteredProjects;
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
