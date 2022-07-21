import moment from "moment";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBoardDetail } from "../../firebase_config";

function BoardShow() {
  const [detail, setDetail] = useState({});

  const b_id = useParams().board;

  useEffect(() => {
    getBoardDetail(b_id)
      .then((board) => {
        setDetail({ ...board });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mx-auto mt-4">
      {Object.keys(detail).length === 0 ? (
        <></>
      ) : (
        <div className="flex flex-col">
          <div className="py-2 flex flex-row-reverse gap-2">
            <Link
              to="/"
              className="bg-violet-600 hover:bg-violet-500 border-violet-500  font-bold text-white px-4 py-2 border text-sm rounded-lg"
            >
              목록
            </Link>
            <Link
              to="#"
              className="hover:bg-indigo-50 border-indigo-500 text-indigo-600 px-4 py-2 border text-sm rounded-lg"
            >
              다음글
            </Link>
            <Link
              to="#"
              className="hover:bg-indigo-50 border-indigo-500 text-indigo-600 px-4 py-2 border text-sm rounded-lg"
            >
              이전글
            </Link>
          </div>
          <div className="container border rounded-md px-7 py-8">
            <h1 className="text-5xl">{detail.b_title}</h1>
            <div className="flex items-center gap-4 py-4 border-b-2 ">
              <img className="h-10 rounded-full" src="/image/profile.png"></img>
              <div className="flex flex-col">
                <span className="text-base font-bold">{detail.b_writer}</span>
                <div className="text-sm text-gray-500">
                  <span>
                    {moment(
                      new Date(detail.b_write_date.seconds * 1000)
                    ).format("YYYY.MM.DD HH:mm:ss")}
                  </span>
                  <span className="ml-3">{`조회 ${detail.b_read}`}</span>
                </div>
              </div>
            </div>
            <p className="py-2" style={{ whiteSpace: "pre-line" }}>
              {detail.b_content}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default BoardShow;
