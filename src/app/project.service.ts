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
}
