import { Resource } from "./Resource";

export class Book extends Resource {
  public author: string;
  public page: number;

  constructor(id: string, title: string, author: string, page: number) {
    super();
    this.id = id;
    this.title = title;
    this.author = author;
    this.page = page;
  }

  getInfo(): string {
    return `${this.title} by ${this.author}, ${this.page} pages`;
  }
}
