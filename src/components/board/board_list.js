import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBoards } from "../../firebase_config";

function BoardList() {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    getBoards().then((newBoards) => {
      setBoards(newBoards);
    });
  }, []);

  return (
    <div className="container mx-auto">
      <table className="w-full my-5">
        <thead className="h-10 bg-indigo-50 border-y-2">
          <tr>
            <th className="w-8/12">제목</th>
            <th className="w-2/12">글쓴이</th>
            <th className="w-2/12">조회수</th>
          </tr>
        </thead>
        <tbody>
          {boards.map((board) => (
            <tr key={board.b_id} className="text-center border-b">
              <td className="px-2 py-2">
                <Link to={`/board/${board.b_id}`}>{board.b_title}</Link>
              </td>
              <td className="px-2 py-2">{board.b_writer}</td>
              <td className="px-2 py-2">{board.b_read}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="w-full flex justify-between items-center">
        <div></div>
        <nav className="flex">
          <Link
            className="px-4 py-2  hover:bg-violet-50 border border-gray-300 text-sm"
            to=""
          >
            <span>&laquo;</span>
          </Link>
          <Link
            className="z-10 px-4 py-2 border border-violet-400 bg-violet-100 text-sm font-bold text-violet-500"
            to="#"
          >
            1
          </Link>
          <Link
            className="px-4 py-2 border hover:bg-violet-50 border-gray-300 text-sm"
            to="#"
          >
            2
          </Link>
          <Link
            className="px-4 py-2 border hover:bg-violet-50 border-gray-300 text-sm"
            to="#"
          >
            3
          </Link>
          <Link
            className="px-4 py-2 border hover:bg-violet-50 border-gray-300 text-sm"
            to="#"
          >
            <span aria-hidden="true">&raquo;</span>
          </Link>
        </nav>

        <Link
          className="bg-violet-600 hover:bg-violet-500 border-violet-500  font-bold text-white px-4 py-2 border text-sm rounded-lg"
          to="write"
        >
          글쓰기
        </Link>
      </div>
    </div>
  );
}

export default BoardList;
