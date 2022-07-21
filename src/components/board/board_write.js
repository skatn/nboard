import { Link, useNavigate } from "react-router-dom";
import { writeBoard } from "../../firebase_config";

function BoardWrite() {
  const navigate = useNavigate();
  const writer = "namsu";

  const submit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const content = event.target.content.value;

    writeBoard(title, content, writer)
      .then(() => {
        console.log(title, content, writer);
        navigate("/", { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onClickCancel = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={submit}>
        {/* 제목 */}
        <div className="flex flex-col">
          <label htmlFor="title" className="text-base my-2">
            제목
          </label>
          <input
            type="text"
            className="p-2 block focus:ring-violet-500 focus:border-violet-500  border-gray-300 rounded-md"
            id="title"
            name="title"
            placeholder="제목"
          />
        </div>

        {/* 본문 */}
        <div className="flex flex-col">
          <label htmlFor="title" className="text-base my-2">
            내용
          </label>
          <textarea
            className="p-2 block focus:ring-violet-500 focus:border-violet-500  border-gray-300 rounded-md"
            id="content"
            name="content"
            rows="15"
          ></textarea>
        </div>

        {/* 버튼 */}
        <div className="flex flex-row-reverse gap-2 mt-2">
          <button
            className="bg-violet-600 hover:bg-violet-500 border-violet-500  font-bold text-white px-4 py-2 border text-sm rounded-lg"
            type="submit"
          >
            작성
          </button>
          <button
            className="bg-indigo-50 hover:bg-indigo-100 border-indigo-500 text-indigo-600 px-4 py-2 border text-sm rounded-lg"
            onClick={onClickCancel}
          >
            취소
          </button>
        </div>
      </form>
    </div>
  );
}

export default BoardWrite;
