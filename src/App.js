import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Student1 from "./pages/Student1";
import SignoutStudent from "./pages/SignoutStudent";
import PlaceOrder from "./pages/PlaceOrder";
import ReturnBook from "./pages/ReturnBook";
import Student from "./pages/Student";
import RegisterAdmin from "./pages/RegisterAdmin";
import RegisterStudent from "./pages/RegisterStudent";
import LoginAdmin from "./pages/LoginAdmin";
import LoginStudent from "./pages/LoginStudent";
import BookSearch1 from "./pages/BookSearch1";
import SignoutAdmin from "./pages/SignoutAdmin";
import AddBook from "./pages/AddBook";
import BookSearch from "./pages/BookSearch";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/student1":
        title = "";
        metaDescription = "";
        break;
      case "/signoutstudent":
        title = "";
        metaDescription = "";
        break;
      case "/place-order":
        title = "";
        metaDescription = "";
        break;
      case "/return-book":
        title = "";
        metaDescription = "";
        break;
      case "/student":
        title = "";
        metaDescription = "";
        break;
      case "/register-admin":
        title = "";
        metaDescription = "";
        break;
      case "/register-student":
        title = "";
        metaDescription = "";
        break;
      case "/login-admin":
        title = "";
        metaDescription = "";
        break;
      case "/login-student":
        title = "";
        metaDescription = "";
        break;
      case "/book-search-1":
        title = "";
        metaDescription = "";
        break;
      case "/signout-admin":
        title = "";
        metaDescription = "";
        break;
      case "/add-book":
        title = "";
        metaDescription = "";
        break;
      case "/book-search":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/student1" element={<Student1 />} />
      <Route path="/signoutstudent" element={<SignoutStudent />} />
      <Route path="/place-order" element={<PlaceOrder />} />
      <Route path="/return-book" element={<ReturnBook />} />
      <Route path="/student" element={<Student />} />
      <Route path="/register-admin" element={<RegisterAdmin />} />
      <Route path="/register-student" element={<RegisterStudent />} />
      <Route path="/login-admin" element={<LoginAdmin />} />
      <Route path="/login-student" element={<LoginStudent />} />
      <Route path="/book-search-1" element={<BookSearch1 />} />
      <Route path="/signout-admin" element={<SignoutAdmin />} />
      <Route path="/add-book" element={<AddBook />} />
      <Route path="/book-search" element={<BookSearch />} />
    </Routes>
  );
}
export default App;
