import { Component, OnInit } from '@angular/core';
import data from '../../assets/data.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  skills: Object;

  constructor() { }

  ngOnInit() {
    this.skills = data.skills;
    console.log(this.skills);
  }

}
