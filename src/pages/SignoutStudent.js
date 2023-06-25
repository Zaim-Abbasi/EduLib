import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignoutStudent.module.css";
const SignoutStudent = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/place-order");
  }, [navigate]);

  const onFrameButton2Click = useCallback(() => {
    navigate("/student");
  }, [navigate]);

  const onFrameButton3Click = useCallback(() => {
    navigate("/return-book");
  }, [navigate]);

  const onFrameButton4Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.signoutStudent}>
      <img
        className={styles.libraryShelf2Icon}
        alt=""
        src="/libraryshelf-2@2x.png"
      />
      <div className={styles.signoutStudentChild} />
      <button className={styles.placeOrderWrapper} onClick={onFrameButtonClick}>
        <b className={styles.placeOrder}>Place Order</b>
      </button>
      <button className={styles.signOutWrapper}>
        <b className={styles.signOut}>Sign Out</b>
      </button>
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
        <b className={styles.placeOrder}>Return Book</b>
      </button>
      <b className={styles.edulib}>EduLib</b>
      <img className={styles.images63} alt="" src="/images-6-3@2x.png" />
      <button className={styles.signoutWrapper} onClick={onFrameButton4Click}>
        <b className={styles.signout}>Signout</b>
      </button>
    </div>
  );
};

export default SignoutStudent;
