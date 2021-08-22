import { Injectable } from '@angular/core';
import data from "../assets/Data.json";

@Injectable({
	providedIn: 'root'
})
export class GameServiceService {

	constructor() { }

	// Gets all projects, sorted alphabetically
	getAllGames() {
		return data.games;
	}
}
