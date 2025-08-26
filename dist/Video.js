import { Resource } from "./Resource.js";
export class Video extends Resource {
    producer;
    duration;
    constructor(id, title, producer, duration) {
        super();
        this.id = id;
        this.title = title;
        this.producer = producer;
        this.duration = duration;
    }
    getInfo() {
        return `${this.title} produced by ${this.producer}, ${this.duration} minutes`;
    }
}
//# sourceMappingURL=Video.js.map