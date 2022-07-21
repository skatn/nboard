import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import BoardList from "./components/board/board_list";
import BoardShow from "./components/board/board_show";
import BoardWrite from "./components/board/board_write";
import Header from "./components/header";
import Login from "./components/login";
import SignUp from "./components/signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<BoardList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/write" element={<BoardWrite />} />
          <Route path="/board/:board" element={<BoardShow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
