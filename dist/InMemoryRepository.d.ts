import { Resource } from './Resource';
import type { Repository } from './Repository';
export declare class InMemoryRepository<T extends Resource> implements Repository<T> {
    private items;
    add(item: T): void;
    findById(id: string): T | undefined;
    getAll(): T[];
    remove(id: string): void;
}
//# sourceMappingURL=InMemoryRepository.d.ts.map