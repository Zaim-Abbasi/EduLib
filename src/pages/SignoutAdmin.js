import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignoutAdmin.module.css";
const SignoutAdmin = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/book-search");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/add-book");
  }, [navigate]);

  const onFrameButton3Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.signoutAdmin}>
      <img
        className={styles.libraryShelf4Icon}
        alt=""
        src="/libraryshelf-2@2x.png"
      />
      <div className={styles.signoutAdminChild} />
      <button className={styles.bookSearchWrapper} onClick={onFrameButtonClick}>
        <b className={styles.bookSearch}>Book Search</b>
      </button>
      <button className={styles.addBookWrapper} onClick={onFrameButton1Click}>
        <b className={styles.addBook}>Add Book</b>
      </button>
      <button className={styles.signoutWrapper}>
        <b className={styles.signout}>Signout</b>
      </button>
      <b className={styles.edulib}>EduLib</b>
      <img className={styles.images62} alt="" src="/images-6-3@2x.png" />
      <button className={styles.signoutContainer} onClick={onFrameButton3Click}>
        <b className={styles.signout1}>Signout</b>
      </button>
    </div>
  );
};

export default SignoutAdmin;
