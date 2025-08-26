import { Resource } from "./Resource.js";
export class InMemoryRepository {
  items = [];
  add(item) {
    this.items.push([item.id, item]);
  }
  findById(id) {
    // On parcourt le tableau pour trouver l'id
    for (const [itemId, item] of this.items) {
      if (itemId === id) {
        return item;
      }
    }
    return undefined;
  }
  getAll() {
    // On extrait juste les objets (sans les id)
    return this.items.map(([, item]) => item);
  }
  remove(id) {
    // On garde seulement les éléments dont l'id est différent
    this.items = this.items.filter(([itemId]) => itemId !== id);
  }
}
//# sourceMappingURL=InMemoryRepository.js.map
