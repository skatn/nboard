import moment from "moment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBoardDetail } from "../../firebase_config";

function BoardShow() {
  const [detail, setDetail] = useState({});

  const b_id = useParams().board;

  useEffect(() => {
    getBoardDetail(b_id)
      .then((board) => {
        setDetail({ ...board });
        console.log(detail);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      {Object.keys(detail).length === 0 ? (
        <></>
      ) : (
        <>
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <a href="/" className="btn btn-primary" type="button">
              목록
            </a>
          </div>
          <div className="container border border-2 rounded-3">
            <h1>{detail.b_title}</h1>
            <div className="vstack gap-1 border-bottom">
              <span>{detail.b_writer}</span>
              <div className="hstack gap-3">
                <span>
                  {moment(new Date(detail.b_write_date.seconds * 1000)).format(
                    "YYYY.MM.DD HH:mm:ss"
                  )}
                </span>
                <span>{`조회 ${detail.b_read}`}</span>
              </div>
            </div>
            <p style={{ whiteSpace: "pre-line" }}>{detail.b_content}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default BoardShow;
