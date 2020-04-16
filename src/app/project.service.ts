import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  selectedProject: any;

  constructor() { }

  setSelectedProject(project){
    this.selectedProject = project;
  }

  getSelectedProject(){
    for(let i = 0; i < this.selectedProject.pictures.length; i++){
      this.selectedProject.pictures[i].show = "none";
      this.selectedProject.pictures[i].opacity = 0.6;
    }
    return this.selectedProject;
  }

}
