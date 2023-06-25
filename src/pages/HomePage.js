import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomePage.module.css";
const HomePage = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/login-student");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/login-admin");
  }, [navigate]);

  return (
    <div className={styles.homePage}>
      <img
        className={styles.libraryShelf1Icon}
        alt=""
        src="/libraryshelf-1@2x.png"
      />
      <b className={styles.edulib}>EduLib</b>
      <button className={styles.download1Parent} onClick={onFrameButtonClick}>
        <img className={styles.download1Icon} alt="" src="/download-1@2x.png" />
        <i className={styles.text} />
      </button>
      <button className={styles.textWrapper} onClick={onFrameButton1Click}>
        <i className={styles.text1} />
      </button>
      <img
        className={styles.adminSignLaptopIconStockV}
        alt=""
        src="/adminsignlaptopiconstockvector166205404-1@2x.png"
      />
    </div>
  );
};

export default HomePage;
