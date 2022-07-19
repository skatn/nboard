import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoardList from "./components/board/board_list";
import BoardWrite from "./components/board/board_write";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BoardList />} />
          <Route path="/write" element={<BoardWrite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
