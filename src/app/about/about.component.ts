import { Component, OnInit } from '@angular/core';
import data from '../../assets/data.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  skills: Object;

  constructor() { }

  ngOnInit() {
    this.skills = data.skills;
    console.log(this.skills);
  }

}
