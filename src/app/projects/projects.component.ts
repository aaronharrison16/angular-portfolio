import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';
import { ProjectInfo } from './project-info.model';

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
      "https://angular-portfolio-bucket.s3-us-west-1.amazonaws.com/materialShoppingListScreenshot.JPG",
      "Material Shopping list screenshot",
      "https://github.com/aaronharrison16/materialShoppingList",
      "https://shopping-list-material.firebaseapp.com/",
      [ new ProjectInfo("Angular7 frontend"),
        new ProjectInfo("Built with Angular Material"),
        new ProjectInfo("Firebase backend"),
        new ProjectInfo("Firebase Google sign in Authentication")
      ]
    ),

    new Project(
      "Utah Water Right Exchange",
      "Application built to serve as a trading platform for water rights broker.",
      "https://angular-portfolio-bucket.s3-us-west-1.amazonaws.com/utahWaterRightExchangeScreenshot.JPG",
      "Utah water right exchange screenshot",
      "https://github.com/aaronharrison16/water_rights_exchange",
      "https://www.utahwaterrightexchange.com/",
      [ new ProjectInfo("Built with Ruby on Rails"),
        new ProjectInfo("Bootstrap CSS framework"),
        new ProjectInfo("Includes authentication"),
      ]
    ),

    new Project(
      "Original Portfolio",
      "My original portfolio application built as one of my first projets.",
      "https://angular-portfolio-bucket.s3-us-west-1.amazonaws.com/oldPortfolioScreenshot.JPG",
      "Aaron Harrison old portfolio screenshot",
      "https://github.com/aaronharrison16/portfolio",
      "https://aaronharrison-portfolio.herokuapp.com/",
      [ new ProjectInfo("Built with Ruby on Rails"),
        new ProjectInfo("Bootstrap CSS framework"),
        new ProjectInfo("Connected to Twitter API"),
        new ProjectInfo("Javascript drag and drop interface")
      ]
    ),

    new Project(
      "Harrison View Tool",
      "Ruby Gem created to generate HTML for Ruby on Rails Projects",
      "https://angular-portfolio-bucket.s3-us-west-1.amazonaws.com/RubyGem.jpeg",
      "Ruby on rails logo",
      "https://github.com/aaronharrison16/harrison-view-tool",
      "https://rubygems.org/gems/harrison_view_tool",
      [ new ProjectInfo("Built with Ruby on Rails"),
        new ProjectInfo("Bootstrap CSS framework"),
        new ProjectInfo("Connected to Twitter API"),
        new ProjectInfo("Javascript drag and drop interface")
      ]
    ),

    new Project(
      "Overtime Tracker",
      "Application for tracking any overtime submitted by employees.",
      "https://angular-portfolio-bucket.s3-us-west-1.amazonaws.com/overtime_tracking_screenshot.JPG",
      "overtime tracking application screenshot",
      "https://github.com/aaronharrison16/portfolio",
      "https://aaronharrison-portfolio.herokuapp.com/",
      [ new ProjectInfo("Angular5 frontend"),
        new ProjectInfo("Bootstrap CSS framework"),
        new ProjectInfo("Ruby Microservice architecture"),
      ]
    ),

    new Project(
      "Material Shopping List",
      "Shopping List application with shopping cart feature.",
      "https://angular-portfolio-bucket.s3-us-west-1.amazonaws.com/materialShoppingListScreenshot.JPG",
      "Material Shopping list screenshot",
      "https://github.com/aaronharrison16/portfolio",
      "https://aaronharrison-portfolio.herokuapp.com/",
      [ new ProjectInfo("Built with Ruby on Rails"),
        new ProjectInfo("Bootstrap CSS framework"),
        new ProjectInfo("Connected to Twitter API"),
        new ProjectInfo("Javascript drag and drop interface")
      ]
    ),
      
  ]

  constructor() { }

  ngOnInit() {
  }
}
