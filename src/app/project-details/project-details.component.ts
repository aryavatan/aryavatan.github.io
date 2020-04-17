import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectService } from '../project.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-project-details',
	templateUrl: './project-details.component.html',
	styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {

	project: any;
	slideIndex: Number;
	caption: string;
	showModal: string;
	skills: Object;

	constructor(private router: Router, private projectService: ProjectService) { }
	
	ngOnDestroy(): void {
		localStorage.removeItem('project');
	}

	ngOnInit() {		
		this.projectService.getSelectedProjectObservable().subscribe(value => {
			this.project = value;
			localStorage.setItem('project', this.project.id);  // reset local storage incase they backstep to this page after ng destory

			// The rest of these should only be executed after project is found
			this.skills = this.project.skills;
			this.slideIndex = 0;
			this.showModal = "none";
			this.showSlides(this.slideIndex);
		});

		// Block direct URL access if not project is selected
		setTimeout(() => {
			if(this.project == undefined){  
				this.router.navigate(['/projects']);
			}
		}, 100);
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
