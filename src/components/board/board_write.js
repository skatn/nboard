import { useState } from "react";
import { writeBoard } from "../../firebase_config";

function BoardWrite() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const writer = "namsu";

  const submit = () => {
    writeBoard(title, content, writer)
      .then(() => {
        console.log(title, content, writer);
        window.location.replace("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const cancel = () => {
    window.location.replace("/");
  };

  const onChangeTitle = (t) => {
    setTitle(t.target.value);
  };

  const onChangeContent = (c) => {
    setContent(c.target.value);
  };

  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          제목
        </label>
        <input
          onChange={onChangeTitle}
          type="text"
          className="form-control"
          id="title"
          placeholder="제목"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          내용
        </label>
        <textarea
          onChange={onChangeContent}
          className="form-control"
          id="content"
          rows="20"
        ></textarea>
      </div>

      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          onClick={cancel}
          className="btn btn-outline-primary"
          type="button"
          href="/"
        >
          취소
        </button>
        <button onClick={submit} className="btn btn-primary" type="button">
          작성
        </button>
      </div>
    </div>
  );
}

export default BoardWrite;
