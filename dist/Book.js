import { Resource } from "./Resource.js";
export class Book extends Resource {
  author;
  page;
  constructor(id, title, author, page) {
    super();
    this.id = id;
    this.title = title;
    this.author = author;
    this.page = page;
  }
  getInfo() {
    return `${this.title} by ${this.author}, ${this.page} pages`;
  }
}
//# sourceMappingURL=Book.js.map
