import { Component, OnInit } from '@angular/core';
import data from "../../assets/Data.json";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects: Object;

  constructor() { }

  ngOnInit() {
    this.projects = data.projects;
    console.log(this.projects);
  }

  hello(project){
    alert(project.description);
  }

}
