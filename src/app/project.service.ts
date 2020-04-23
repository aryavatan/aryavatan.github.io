import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import data from "../assets/Data.json";

@Injectable({
	providedIn: 'root'
})
export class ProjectService {

	selectedProject: any;

	constructor() { }

	setSelectedProject(project) {
		this.selectedProject = project;
		localStorage.setItem('project', project.id);
	}

	getSelectedProject() {
		if (this.selectedProject == undefined) {
			let id = localStorage.getItem('project');
			data.projects.forEach(project => {
				if (project.id == id) {
					this.selectedProject = project;
				}
			})
		}

		for (let i = 0; i < this.selectedProject.pictures.length; i++) {
			this.selectedProject.pictures[i].show = "none";
			this.selectedProject.pictures[i].opacity = 0.6;
		}
		return this.selectedProject;
	}

	getSelectedProjectObservable() {
		return new Observable(observer => {
			observer.next(this.getSelectedProject());
			observer.complete();
		})
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
