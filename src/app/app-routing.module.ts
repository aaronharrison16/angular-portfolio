import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { IntroComponent } from './intro/intro.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { SkillsComponent } from './skills/skills.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  { path: '', component: IntroComponent, data: { animation: 'intro' }  },
  { path: 'about', component: AboutComponent, data: { animation: 'about' }  },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'projects' }  },
  { path: 'skills', component: SkillsComponent, data: { animation: 'skills' }  },
  { path: 'education', component: EducationComponent, data: { animation: 'education' }  },
  { path: 'experience', component: ExperienceComponent, data: { animation: 'experience' }  },
  { path: 'contact', component: ContactComponent, data: { animation: 'contact' }  },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }