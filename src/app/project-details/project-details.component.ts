import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  project: Object;

  constructor(private projectService : ProjectService) { }

  ngOnInit() {
    this.project = this.projectService.getSelectedProject();
  }

}
