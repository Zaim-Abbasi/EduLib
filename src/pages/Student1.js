import React, { useState } from 'react';
import { booksData } from './books';
import styles from './Student.module.css';

const Student1 = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState({});

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleBookSelect = (book) => {
    setSelectedBook(book);
    setDropdownOpen(false);
  };

  return (
    <div className={styles.student1}>
      <div className={styles.libraryShelf2Icon} />
      <div className={styles.student1Child}>
        <div className={styles.bookSearchWrapper} onClick={toggleDropdown}>
          <p className={styles.bookSearch}>Book Search</p>
        </div>
        <div className={styles.returnBookWrapper}>
          <p>Return Book</p>
        </div>
        <div className={styles.placeOrderWrapper}>
          <p className={styles.placeOrder}>Place Order</p>
        </div>
        <div className={styles.signOutWrapper}>
          <p className={styles.signOut}>Sign Out</p>
        </div>
        <h1 className={styles.booksSearch}>Books Search</h1>
        <div className={styles.nameWrapper}>
          <p className={styles.name}>Name</p>
        </div>
        <div className={styles.authorWrapper}>
          <p>Author</p>
        </div>
        <div className={styles.quantityWrapper}>
          <p className={styles.quantity}>Quantity</p>
        </div>
        <input
          className={styles.frameInput}
          type="text"
          placeholder="Search by name"
        />
        <div className={styles.student1Item}>
          {dropdownOpen && (
            <ul>
              {booksData.map((book) => (
                <li
                  key={book.id}
                  onClick={() => handleBookSelect(book)}
                >
                  {book.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={styles.student1Inner}>
          {selectedBook && selectedBook.quantity}
        </div>
      </div>
    </div>
  );
};

export default Student1;
