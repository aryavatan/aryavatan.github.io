import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import data from "../../assets/Data.json";
import { ProjectService } from '../project.service';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

	allProjects: any;
    projects: any;
	filters: any;
	selectedFilter: any;

	constructor(private router: Router, private route: ActivatedRoute, private projectService: ProjectService) { }

	ngOnInit() {
        // Initialize and order projects alphabetically
		this.allProjects = data.projects.sort((proj1, porj2) => {
			if(proj1.name.toLowerCase() > porj2.name.toLowerCase()){
				return 1;
			}
			if(proj1.name.toLowerCase() < porj2.name.toLowerCase()){
				return -1
			}
			return 0;
		});
        this.projects = JSON.parse(JSON.stringify(this.allProjects)); // Make deep copy

        // Extract Skills from the projects to create the filters
        this.getFilterSkills();  
        
        // Subscribe to filter query param changes
        this.route.queryParams.subscribe(params => {
            console.log(params.filter); 
            if(params.filter) {
                // Block unrecognized filters
                if (this.filters.filter(e => e.name == params.filter).length == 0) {
                    this.updateQueryParameters(null);
                    return;
                }

                // Select the filter
                this.filters.forEach(filter => {
                    if(filter.name == params.filter){
                        this.filterSelected(filter);
                        return;
                    }
                });
            }
            else{
                this.filterSelected({name: 'Show All'});
            }
        });
	}

	projectClicked(project) {
		this.router.navigate(['/projects', project.id]);
	}

	getFilterSkills() {
		this.selectedFilter = 'selected';  // This will initially select "Show All" option
		this.filters = this.projectService.getFilterSkills();
	}

	filterSelected(filter){		
		// First unselect previous filter
		if(this.selectedFilter != undefined && this.selectedFilter != 'selected'){
			this.selectedFilter.class = "";
		}
		
		// If "Show All" is clicked, reload all projects, change selectedFilter so "Show All" button is active
		if(filter.name == 'Show All'){
			this.selectedFilter = 'selected'
            this.projects = JSON.parse(JSON.stringify(this.allProjects));
            this.updateQueryParameters(null);
			return;
        }
        
        // Update URL filter parameter
        this.updateQueryParameters(filter.name);

		// Select the filter so the button looks selected
		this.selectedFilter = filter;
		this.selectedFilter.class = "selected";

		// Get projects that match filter
		this.projects = this.getFilteredProjects(filter.name);  // Assign to data-binded projects variable
    }

    // Gets list of projects based on filter name
    getFilteredProjects(filterName) {
        if (filterName == ''){
            return JSON.parse(JSON.stringify(this.allProjects));
        }
        
        // Get projects that match filter from master list
		let filteredProjects  = [];
		this.allProjects.forEach(project => {
			if(project.skills.includes(filterName)){
				filteredProjects.push(project);
			}
		});
		return filteredProjects;
    }
    
    // Update the query parameters in the URL for the selected filter
    updateQueryParameters(filter) {
        let queryParams = filter === null ? filter : { filter: filter };
        
        this.router.navigate(
            [], 
            { 
                queryParams: queryParams, 
            }
        );
    }

}
