import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BookSearch.module.css";
const BookSearch = () => {
  const navigate = useNavigate();

  const onFrameButton1Click = useCallback(() => {
    navigate("/add-book");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/signout-admin");
  }, [navigate]);

  const onFrameButton3Click = useCallback(() => {
    navigate("/book-search-1");
  }, [navigate]);

  return (
    <div className={styles.bookSearch}>
      <img
        className={styles.libraryShelf4Icon}
        alt=""
        src="/libraryshelf-2@2x.png"
      />
      <div className={styles.bookSearchChild} />
      <img
        className={styles.bookSearchItem}
        alt=""
        src="/rectangle-10@2x.png"
      />
      <b className={styles.bookSearch1}>Book Search</b>
      <button className={styles.bookSearchWrapper}>
        <b className={styles.bookSearch2}>Book Search</b>
      </button>
      <button className={styles.addBookWrapper} onClick={onFrameButton1Click}>
        <b className={styles.addBook}>Add Book</b>
      </button>
      <button className={styles.signoutWrapper} onClick={onFrameButton2Click}>
        <b className={styles.signout}>Signout</b>
      </button>
      <input
        className={styles.bookSearchInner}
        type="search"
        placeholder="Search"
        maxLength={10}
        minLength={5}
        required
      />
      <button className={styles.searchWrapper} onClick={onFrameButton3Click}>
        <div className={styles.search}>Search</div>
      </button>
      <b className={styles.edulib}>EduLib</b>
    </div>
  );
};

export default BookSearch;
