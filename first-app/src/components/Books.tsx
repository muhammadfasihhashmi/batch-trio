import { harryPotterBooks } from "../constants/books.constants";

export default function Books() {
  return (
    <section className="py-10">
      <div className="text-[#deb887] flex flex-col items-center justify-center gap-3 ">
        <h2 className="text-3xl font-bold">Our Books</h2>
        <p className="text-lg">
          Authentic JK rowling books. 7 interesting books to choose from. All
          from our stores, all well packed, all neat and clean.
        </p>
      </div>
      <ul className="max-w-7xl mx-auto py-10 grid grid-cols-3 gap-3 place-items-center ">
        {harryPotterBooks.map((book) => (
          <li
            key={book.id}
            className="flex flex-col items-center justify-center max-w-75"
          >
            <img className="h-100" src={book.cover} alt="book image" />
            <p className="text-center">{book.title}</p>
            <p className="text-center">{book.description}</p>
            <span>{book.releaseDate}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
