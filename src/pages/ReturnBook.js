import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ReturnBook.module.css";
const ReturnBook = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/place-order");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/signoutstudent");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/student");
  }, [navigate]);

  return (
    <div className={styles.returnBook}>
      <img
        className={styles.libraryShelf2Icon}
        alt=""
        src="/libraryshelf-2@2x.png"
      />
      <div className={styles.returnBookChild} />
      <button className={styles.placeOrderWrapper} onClick={onFrameButtonClick}>
        <b className={styles.placeOrder}>Place Order</b>
      </button>
      <button className={styles.signOutWrapper} onClick={onFrameButton1Click}>
        <b className={styles.signOut}>Sign Out</b>
      </button>
      <b className={styles.returnBook1}>Return Book</b>
      <button
        className={styles.bookSearchWrapper}
        onClick={onFrameButton2Click}
      >
        <b className={styles.bookSearch}>Book Search</b>
      </button>
      <button className={styles.returnBookWrapper}>
        <b className={styles.placeOrder}>Return Book</b>
      </button>
      <b className={styles.edulib}>EduLib</b>
      <button className={styles.returnWrapper}>
        <div className={styles.return}>Return</div>
      </button>
      <input
        className={styles.returnBookItem}
        type="text"
        placeholder="Author"
        maxLength={15}
        minLength={5}
      />
      <input
        className={styles.returnBookInner}
        type="text"
        placeholder="Book"
        maxLength={15}
        minLength={5}
      />
    </div>
  );
};

export default ReturnBook;
