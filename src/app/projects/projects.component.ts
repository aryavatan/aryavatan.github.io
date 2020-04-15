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

  projects: Object;

  constructor(private router: Router, private projectService : ProjectService) { }

  ngOnInit() {
    this.projects = data.projects;
    console.log(this.projects);
  }

  projectClicked(project){
    this.projectService.setSelectedProject(project);
    this.router.navigate(['projects/project-details']);
  }

}
