import { Video } from "./Video.js";
import { Book } from "./Book.js";
import { InMemoryRepository } from "./InMemoryRepository.js";
const videoRepo = new InMemoryRepository();
const bookRepo = new InMemoryRepository();
videoRepo.add(new Video("1", "Inception", "Christopher Nolan", 148));
videoRepo.add(
  new Video("2", "The Matrix", "Lana Wachowski, Lilly Wachowski", 136)
);
videoRepo.add(new Video("3", "Interstellar", "Christopher Nolan", 169));
bookRepo.add(new Book("1", "1984", "George Orwell", 328));
bookRepo.add(new Book("2", "Brave New World", "Aldous Huxley", 268));
bookRepo.add(new Book("3", "Fahrenheit 451", "Ray Bradbury", 256));
videoRepo.getAll().forEach((video) => {
  console.log(`Video: ${video.title} (${video.duration} mins)`);
  //  alert(`Video: ${video.title} (${video.duration} mins)`);
});
bookRepo.getAll().forEach((book) => {
  console.log(`Book: ${book.title} (${book.page} pages)`);
});

let a = videoRepo.findById("1");
let b = bookRepo.findById("2");

if (a && b) {
  console.log(`Found video: ${a.title} \t(${a.duration} mins)`);
  console.log(`Found book: ${b.title} by ${b.author} (${b.page} pages)`);
} else if (!a) {
  console.log(`Video not found`);
} else if (!b) {
  console.log(`Book not found`);
} else {
  console.log(`Both video and book not found`);
}
//# sourceMappingURL=main.js.map
