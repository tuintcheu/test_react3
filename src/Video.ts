import { Resource } from "./Resource";

export class Video extends Resource {
  public producer: string;
  public duration: number;

  constructor(id: string, title: string, producer: string, duration: number) {
    super();
    this.id = id;
    this.title = title;
    this.producer = producer;
    this.duration = duration;
  }

  getInfo(): string {
    return `${this.title} produced by ${this.producer}, ${this.duration} minutes`;
  }
}
