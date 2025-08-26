import { Resource } from "./Resource";
export declare class Video extends Resource {
    producer: string;
    duration: number;
    constructor(id: string, title: string, producer: string, duration: number);
    getInfo(): string;
}
//# sourceMappingURL=Video.d.ts.map