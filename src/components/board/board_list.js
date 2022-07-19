import { useEffect, useState } from "react";
import { getBoards } from "../../firebase_config";

function BoardList() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    console.log("==db==");
    getBoards().then((newBoards) => {
      setBoards(newBoards);
      console.log(newBoards);
    });
  }, []);

  return (
    <div className="container">
      <h1 className="text-center">
        <a href="#">nBoard!</a>
      </h1>
      <table className="table table-hover table-striped text-center">
        <thead>
          <tr>
            <th>제목</th>
            <th>글쓴이</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          {boards.map((board) => (
            <tr key={board.b_id}>
              <td>
                <a href="#">{board.b_title}</a>
              </td>
              <td>{board.b_writer}</td>
              <td>{board.b_read}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>

      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <a className="btn btn-outline-primary float-right" href="write">
          글쓰기
        </a>
      </div>
    </div>
  );
}

export default BoardList;
