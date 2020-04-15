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
    return this.selectedProject;
  }

}
