export abstract class Resource {
  public id!: string;
  public title!: string;

  abstract getInfo(): string;
}
