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
      "https://angular-portfolio-bucket.s3-us-west-1.amazonaws.com/Screenshot_20190722-085010_Chrome-01-01.jpeg",
      "Material Shopping list screenshot",
      "https://github.com/aaronharrison16/materialShoppingList",
      "https://shopping-list-material.firebaseapp.com/",
      [ new ProjectInfo("Angular7 frontend"),
        new ProjectInfo("Built with Angular Material"),
        new ProjectInfo("Firebase backend"),
        new ProjectInfo("Firebase Google sign in Authentication"),
        new ProjectInfo("Implements HTTP requests to connect to Firebase"),
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
        new ProjectInfo("Devise Authentication"),
        new ProjectInfo("Test Driven Development using rspec & Capybara"),
        new ProjectInfo("Implements Mailgun API for sending emails to users on the platform"),
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
        new ProjectInfo("Connected to Twitter API for live tweets"),
        new ProjectInfo("Javascript drag and drop interface for admin on Portfolio page"),
        new ProjectInfo("Comment feature built with CoffeeScript and ActionCable web-sockets for live updates."),
      ]
    ),

    new Project(
      "Harrison View Tool",
      "Ruby Gem created to generate HTML for Ruby on Rails Projects",
      "https://angular-portfolio-bucket.s3-us-west-1.amazonaws.com/RubyGem.jpeg",
      "Ruby on rails logo",
      "https://github.com/aaronharrison16/harrison-view-tool",
      "https://rubygems.org/gems/harrison_view_tool",
      [ new ProjectInfo("Custom Ruby Gem"),
        new ProjectInfo("Generates dynamic HTML code for Ruby on Rails applications"),
        new ProjectInfo("Used mostly for application footers to keep up to date copyright information"),
        new ProjectInfo("400+ downloads")
      ]
    ),

    new Project(
      "Overtime Tracker",
      "Application for tracking any overtime submitted by employees.",
      "https://angular-portfolio-bucket.s3-us-west-1.amazonaws.com/overtime_tracking_screenshot.JPG",
      "overtime tracking application screenshot",
      "https://github.com/aaronharrison16/overtime",
      "https://harrison-overtime.herokuapp.com/",
      [ new ProjectInfo("Built using Ruby on Rails"),
        new ProjectInfo("Bootstrap CSS framework"),
        new ProjectInfo("Test Driven Development using rspec & Capybara"),
        new ProjectInfo("Integrated SparkPost API for scheduled text messages"),
        new ProjectInfo("Hosted on Heroku"),
      ]
    ),

    new Project(
      "Freelance Tracker",
      "Built for freelance developers to track their projects",
      "https://angular-portfolio-bucket.s3-us-west-1.amazonaws.com/freelance_tracker_screenshot.png",
      "Freelance Tracker Screenshot",
      "https://github.com/aaronharrison16/freelance-tracker",
      "https://aaronharrison16.github.io/freelance-tracker/",
      [ new ProjectInfo("Built with Ruby on Rails microservice"),
        new ProjectInfo("Built with Angular6 framework"),
        new ProjectInfo("Bootstrap CSS framework"),
        new ProjectInfo("Microservice hosted on Heroku"),
        new ProjectInfo("Angular pages hosted on Github Pages")
      ]
    ),
      
  ]

  constructor() { }

  ngOnInit() {
  }
}
