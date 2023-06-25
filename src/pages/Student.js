// Student.js
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Student.module.css";
import { booksData } from "./books"; // Import booksData from books.js

const Student = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    if (search) {
      const searchResults = booksData.filter((book) =>
        book.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredBooks(searchResults);
    } else {
      setFilteredBooks([]);
    }
  }, [search]);

  const onBookClick = (bookId) => {
    navigate(`/student1/${bookId}`);
  };

  const onFrameButtonClick = useCallback(() => {
    navigate("/place-order");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/signoutstudent");
  }, [navigate]);

  const onFrameButton3Click = useCallback(() => {
    navigate("/return-book");
  }, [navigate]);

  return (
    <div className={styles.student}>
      <img
        className={styles.libraryShelf2Icon}
        alt=""
        src="/libraryshelf-2@2x.png"
      />
      <div className={styles.studentChild} />
      <button className={styles.placeOrderWrapper} onClick={onFrameButtonClick}>
        <b className={styles.placeOrder}>Place Order</b>
      </button>
      <button className={styles.signOutWrapper} onClick={onFrameButton1Click}>
        <b className={styles.signOut}>Sign Out</b>
      </button>
      <b className={styles.booksSearch}>Books Search</b>
      <button className={styles.bookSearchWrapper}>
        <b className={styles.bookSearch}>Book Search</b>
      </button>
      <button
        className={styles.returnBookWrapper}
        onClick={onFrameButton3Click}
      >
        <b className={styles.placeOrder}>Return Book</b>
      </button>
      <input
        className={styles.studentItem}
        type="search"
        placeholder="Search"
        minLength={5}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        required
      />
      <button className={styles.searchWrapper}>
        <div className={styles.search}>Search</div>
      </button>
      <b className={styles.edulib}>EduLib</b>

      {filteredBooks.length > 0 && (
        <div className={styles.dropdown}>
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className={styles.dropdownItem}
              onClick={() => onBookClick(book.id)}
            >
              {book.name} - {book.author}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Student;
