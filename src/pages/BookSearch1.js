import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BookSearch1.module.css";
const BookSearch1 = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/book-search");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/add-book");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/signout-admin");
  }, [navigate]);

  const onFrameButton3Click = useCallback(() => {
    navigate("/book-search");
  }, [navigate]);

  return (
    <div className={styles.bookSearch1}>
      <img
        className={styles.libraryShelf4Icon}
        alt=""
        src="/libraryshelf-2@2x.png"
      />
      <div className={styles.bookSearch1Child} />
      <img
        className={styles.bookSearch1Item}
        alt=""
        src="/rectangle-10@2x.png"
      />
      <b className={styles.bookSearch}>Book Search</b>
      <button className={styles.bookSearchWrapper} onClick={onFrameButtonClick}>
        <b className={styles.bookSearch2}>Book Search</b>
      </button>
      <button className={styles.addBookWrapper} onClick={onFrameButton1Click}>
        <b className={styles.addBook}>Add Book</b>
      </button>
      <button className={styles.signoutWrapper} onClick={onFrameButton2Click}>
        <b className={styles.signout}>Signout</b>
      </button>
      <b className={styles.edulib}>EduLib</b>
      <div className={styles.bookIdWrapper}>
        <div className={styles.bookId}>Book ID</div>
      </div>
      <div className={styles.titleWrapper}>
        <div className={styles.title}>Title</div>
      </div>
      <div className={styles.bookSearch1Inner}>
        <div className={styles.authorWrapper}>
          <div className={styles.author}>Author</div>
        </div>
      </div>
      <div className={styles.costWrapper}>
        <div className={styles.cost}>Cost</div>
      </div>
      <div className={styles.quantityWrapper}>
        <div className={styles.quantity}>Quantity</div>
      </div>
      <input className={styles.frameInput} type="number" />
      <input
        className={styles.bookSearch1Child1}
        type="text"
        maxLength={10}
        minLength={5}
      />
      <input
        className={styles.bookSearch1Child2}
        type="text"
        maxLength={10}
        minLength={5}
      />
      <input className={styles.bookSearch1Child3} type="number" min={1} />
      <input className={styles.bookSearch1Child4} type="text" minLength={1} />
      <button className={styles.backWrapper} onClick={onFrameButton3Click}>
        <div className={styles.back}>Back</div>
      </button>
    </div>
  );
};

export default BookSearch1;
