import { Resource } from './Resource';
import type { Repository } from './Repository';




export class InMemoryRepository<T extends Resource> implements Repository<T> {
  
  private items: Array<[string, T]> = [];

  
  add(item: T): void {
    
    this.items.push([item.id, item]);
  }

  
  findById(id: string): T | undefined {
    // On parcourt le tableau pour trouver l'id
    for (const [itemId, item] of this.items) {
      if (itemId === id) {
        return item;
      }
    }
    
    return undefined;
  }

 
  getAll(): T[] {
    // On extrait juste les objets (sans les id)
    return this.items.map(([, item]) => item);
  }

  
  remove(id: string): void {
    // On garde seulement les éléments dont l'id est différent
    this.items = this.items.filter(([itemId]) => itemId !== id);
  }
}


