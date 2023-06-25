// RegisterStudent.js
import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RegisterStudent.module.css";
import { studentsData } from "./student_data"; // Import studentsData from student_data.js

const RegisterStudent = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFrameButtonClick = useCallback(() => {
    if (name && email && password) {
      studentsData.push({ name, email, password });
      navigate("/login-student");
    } else {
      alert("All fields are required.");
    }
  }, [name, email, password, navigate]);

  return (
    <div className={styles.registerStudent}>
      <img
        className={styles.libraryShelf1Icon}
        alt=""
        src="/libraryshelf-2@2x.png"
      />
      <b className={styles.edulib}>EduLib</b>
      <div className={styles.registerStudentChild} />
      <input
        className={styles.registerStudentItem}
        type="email"
        placeholder="Email"
        maxLength={30}
        minLength={10}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className={styles.registerStudentInner}
        type="password"
        placeholder="Password"
        maxLength={15}
        minLength={5}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button className={styles.registerWrapper} onClick={onFrameButtonClick}>
        <b className={styles.register}>Register</b>
      </button>
      <img
        className={styles.rectangleIcon}
        alt=""
        src="/rectangle-3@2x.png"
      />
      <input
        className={styles.frameInput}
        type="text"
        placeholder="Name"
        maxLength={20}
        minLength={5}
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
    </div>
  );
};

export default RegisterStudent;
