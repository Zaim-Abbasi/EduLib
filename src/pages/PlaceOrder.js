import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PlaceOrder.module.css";
const PlaceOrder = () => {
  const navigate = useNavigate();

  const onFrameButton1Click = useCallback(() => {
    navigate("/signoutstudent");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/student");
  }, [navigate]);

  const onFrameButton3Click = useCallback(() => {
    navigate("/return-book");
  }, [navigate]);

  return (
    <div className={styles.placeOrder}>
      <img
        className={styles.libraryShelf2Icon}
        alt=""
        src="/libraryshelf-2@2x.png"
      />
      <div className={styles.placeOrderChild} />
      <button className={styles.placeOrderWrapper}>
        <b className={styles.returnBook}>Place Order</b>
      </button>
      <button className={styles.signOutWrapper} onClick={onFrameButton1Click}>
        <b className={styles.signOut}>Sign Out</b>
      </button>
      <b className={styles.placeOrder2}>Place Order</b>
      <button
        className={styles.bookSearchWrapper}
        onClick={onFrameButton2Click}
      >
        <b className={styles.bookSearch}>Book Search</b>
      </button>
      <button
        className={styles.returnBookWrapper}
        onClick={onFrameButton3Click}
      >
        <b className={styles.returnBook}>Return Book</b>
      </button>
      <b className={styles.edulib}>EduLib</b>
      <input
        className={styles.placeOrderItem}
        type="search"
        placeholder="Search Book"
        maxLength={15}
        minLength={5}
        required
      />
      <button className={styles.placeOrderContainer}>
        <div className={styles.placeOrder3}>Place Order</div>
      </button>
    </div>
  );
};

export default PlaceOrder;
