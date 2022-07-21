import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="relative bg-slate-100 shadow-md h-14 px-7 flex justify-between items-center">
      <Link className="flex items-center" to="/">
        <img className="h-10" src="/image/dice.png" alt="" />
        nboard
      </Link>
      <div className="flex gap-3">
        <Link
          className="bg-indigo-50 hover:bg-indigo-100 border-indigo-500 text-indigo-600 px-4 py-2 border text-sm rounded-lg"
          to="/login"
        >
          Login
        </Link>
        <Link
          className="bg-violet-600 hover:bg-violet-500 border-violet-500  font-bold text-white px-4 py-2 border text-sm rounded-lg"
          to="/signup"
        >
          Sign up
        </Link>
      </div>
    </nav>
  );
}

export default Header;
