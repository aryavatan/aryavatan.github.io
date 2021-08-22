import { Component, OnInit } from '@angular/core';
import data from '../../assets/Data.json';
import { Router } from '@angular/router';
import { GameServiceService } from '../game-service.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	skills: Object;
	games: Object;

	constructor(
		private router: Router,
		private gameService: GameServiceService
	) { }

	ngOnInit() {
		this.initSkills();
		this.initGames();
	}

	initSkills() {
		this.skills = data['skills'].sort();
	}

	// If skill that has projects is clicked, route to projects w/ that skill as the filter
	skillClicked(skill) {
		if (skill.class == "has-project") {
			this.router.navigate(
				['/projects'],
				{
					queryParams: {
						filter: skill.name
					},
				}
			);
		}
	}

	// Get the games from data.json
	initGames() {
		this.games = this.gameService.getAllGames();
	}

}
