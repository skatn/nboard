import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardList from "./components/board/board_list";
import BoardShow from "./components/board/board_show";
import BoardWrite from "./components/board/board_write";
import Header from "./components/header/header";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BoardList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/write" element={<BoardWrite />} />
          <Route path="/board/:board" element={<BoardShow />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
