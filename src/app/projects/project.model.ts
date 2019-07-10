import { ProjectInfo } from './project-info.model';

export class Project {
  public title: string;
  public subtitle: string;
  public imagePath: string;
  public alt: string;
  public github: string;
  public site: string;
  public projectInfo: ProjectInfo[];

  constructor(title: string, subtitle: string, imagePath: string, alt: string, github: string, site: string, projectInfo: ProjectInfo[]) {
    this.title = title,
    this.subtitle = subtitle,
    this.imagePath = imagePath,
    this.alt = alt,
    this.github = github,
    this.site = site,
    this.projectInfo = projectInfo
  }
}