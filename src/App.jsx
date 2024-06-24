import Header from "./components/Header";
import Nav from "./components/Nav";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import EditPost from "./components/EditPost";
import PostPage from "./components/PostPage";
import About from "./components/About";
import Missing from "./components/Missing";
import Footer from "./components/Footer";
import { Route, Routes} from "react-router-dom";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <>
      <div className="App">
        <DataProvider>
          <Header title="Anbu Social Media" />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="post">
              <Route index element={<NewPost />} />
              <Route path=":id" element={<PostPage />} />
            </Route>
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Missing />} />
          </Routes>
          <Footer />
        </DataProvider>
      </div>
    </>
  );
}

export default App;
