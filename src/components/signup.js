import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const submit = (event) => {
    event.preventDefault();
  };
  const onClickCancel = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="container w-screen">
      <form onSubmit={submit}>
        <div className="flex flex-col w-96 gap-4">
          <input
            id="id"
            name="id"
            type="text"
            className="py-2 border-5"
            placeholder="example@example.com"
          />
          <input
            id="password"
            name="password"
            type="password"
            className="py-2 border-5"
            placeholder="passwords"
          />
          <div className="flex justify-between">
            <div className="flex items-center">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                className="accent-violet-500"
              />
              <label htmlFor="remember" className="ml-2">
                Remember me
              </label>
            </div>
            <Link to="#" className="text-base text-violet-500">
              Forgot your password?
            </Link>
          </div>
          <button className="bg-violet-600 hover:bg-violet-500 border-violet-500 font-bold text-white px-4 py-2 border text-sm rounded-lg">
            Sign up
          </button>
          <button
            className="bg-indigo-50 hover:bg-indigo-100 border-indigo-500 text-indigo-600 px-4 py-2 border text-sm rounded-lg"
            onClick={onClickCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
