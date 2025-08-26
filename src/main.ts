import { Video } from "./Video";
import { Book } from "./Book";
import { InMemoryRepository } from "./InMemoryRepository";

const videoRepo = new InMemoryRepository<Video>();
const bookRepo = new InMemoryRepository<Book>();

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
});

bookRepo.getAll().forEach((book) => {
  console.log(`Book: ${book.title} (${book.page} pages)`);
});

videoRepo.findById("1");

bookRepo.findById("2");
