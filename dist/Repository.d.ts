export interface Repository<T> {
    add(item: T): void;
    remove(id: string): void;
    findById(id: string): T | undefined;
    getAll(): T[];
}
//# sourceMappingURL=Repository.d.ts.map