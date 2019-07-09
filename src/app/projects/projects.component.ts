import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {
  

  

  public projects: Project[] = [
    new Project(
      "Material Shopping List",
      "Shopping List application with shopping cart feature.",
      "../../assets/images/materialShoppingListScreenshot.JPG",
      "Material Shopping list screenshot"
    ),

    new Project(
      "Utah Water Right Exchange",
      "Application built to serve as a trading platform for water rights broker.",
      "../../assets/images/utahWaterRightExchangeScreenshot.JPG",
      "Utah water right exchange screenshot"
    ),

    new Project(
      "Original Portfolio",
      "My original portfolio application built as one of my first projets.",
      "../../assets/images/oldPortfolioScreenshot.JPG",
      "Aaron Harrison old portfolio screenshot"
    ),

    new Project(
      "Harrison View Tool",
      "Ruby Gem created to generate HTML for Ruby on Rails Projects",
      "../../assets/images/RubyGem.jpeg",
      "Ruby on rails logo"
    ),

    new Project(
      "Overtime Tracker",
      "Application for tracking any overtime submitted by employees.",
      "../../assets/images/overtime_tracking_screenshot.JPG",
      "overtime tracking application screenshot"
    ),

    new Project(
      "Material Shopping List",
      "Shopping List application with shopping cart feature.",
      "../../assets/images/materialShoppingListScreenshot.JPG",
      "Material Shopping list screenshot"
    ),
      
  ]

  constructor() { }

  ngOnInit() {
  }

  onProjectSelect(index) {
    var show = document.getElementById("show_project_"+index);
    var main = document.getElementById("main_project_"+index);

    if (show.style.display === "none") {
      show.style.display = "block";
      main.style.display = "none";
    } else {
      show.style.display = "none";
      main.style.display = "block";
    }
  }
}
