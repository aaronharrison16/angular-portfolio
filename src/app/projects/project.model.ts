export class Project {
  public title: string;
  public subtitle: string;
  public imagePath: string;
  public alt: string;

  constructor(title: string, subtitle: string, imagePath: string, alt: string) {
    this.title = title,
    this.subtitle = subtitle,
    this.imagePath = imagePath
    this.alt = alt
  }
}