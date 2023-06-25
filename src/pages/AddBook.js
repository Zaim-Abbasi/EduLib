import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AddBook.module.css";
const AddBook = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/book-search");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/signout-admin");
  }, [navigate]);

  const onFrameButton3Click = useCallback(() => {
    navigate("/book-search");
  }, [navigate]);

  return (
    <div className={styles.addBook}>
      <img
        className={styles.libraryShelf4Icon}
        alt=""
        src="/libraryshelf-2@2x.png"
      />
      <div className={styles.addBookChild} />
      <b className={styles.addBook1}>Add Book</b>
      <button className={styles.bookSearchWrapper} onClick={onFrameButtonClick}>
        <b className={styles.bookSearch}>Book Search</b>
      </button>
      <button className={styles.addBookWrapper}>
        <b className={styles.addBook2}>Add Book</b>
      </button>
      <button className={styles.signoutWrapper} onClick={onFrameButton2Click}>
        <b className={styles.signout}>Signout</b>
      </button>
      <b className={styles.edulib}>EduLib</b>
      <img
        className={styles.whatIsThePurposeOfALibraIcon}
        alt=""
        src="/whatisthepurposeofalibrarymanagementsystemmin-1@2x.png"
      />
      <input
        className={styles.addBookItem}
        type="text"
        placeholder="Title"
        maxLength={10}
        minLength={5}
        required
      />
      <input
        className={styles.addBookInner}
        type="number"
        placeholder="Book ID"
        min={6}
        max={6}
        step={1}
        required
      />
      <input
        className={styles.frameInput}
        type="text"
        placeholder="Author"
        maxLength={10}
        minLength={5}
        required
      />
      <button className={styles.addWrapper} onClick={onFrameButton3Click}>
        <div className={styles.add}>Add</div>
      </button>
      <input
        className={styles.addBookChild1}
        type="number"
        placeholder="Cost"
        min={1}
        required
      />
      <input
        className={styles.addBookChild2}
        type="number"
        placeholder="Quantity"
        min={1}
        max={10}
        required
      />
    </div>
  );
};

export default AddBook;
