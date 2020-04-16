import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
	selector: 'app-project-details',
	templateUrl: './project-details.component.html',
	styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

	project: any;
	slideIndex: Number;
	caption: string;
	showModal: string;
	skills: Object;

	constructor(private projectService: ProjectService) { }

	ngOnInit() {
		this.project = this.projectService.getSelectedProject();
		this.skills = this.project.skills;
		this.slideIndex = 0;
		this.showModal = "none";
		this.showSlides(this.slideIndex);
	}

	plusSlides(n){
		this.showSlides(this.slideIndex += n);
	}

	currentSlide(src){
		for(let i = 0; i < this.project.pictures.length; i++){
			if(this.project.pictures[i].src == src){
				this.showSlides(this.slideIndex = i);
				return;
			}
		}
	}

	showSlides(n) {
		if(n < 0){
			this.slideIndex = this.project.pictures.length - 1;
		}
		else if(n >= this.project.pictures.length){
			this.slideIndex = 0;
		}

		for(let i = 0; i < this.project.pictures.length; i++){
			if(i == this.slideIndex){
				this.project.pictures[i].show = "block";
				this.project.pictures[i].opacity = 1;
				this.caption = this.project.pictures[i].caption;
			}
			else{
				this.project.pictures[i].show = "none";
				this.project.pictures[i].opacity = 0.6;
			}
		}
	}

	changeDemoOpacity(src, opacity){
		for(let i = 0; i < this.project.pictures.length; i++){
			if(this.project.pictures[i].src == src && i != this.slideIndex){
				this.project.pictures[i].opacity = opacity;
				return;
			}
		}
	}

	openModal(){
		this.showModal = "block";
	}

	closeModal(){
		this.showModal = "none";
	}
}
