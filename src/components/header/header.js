import "./header.css";

function Header() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src="/docs/5.1/assets/brand/bootstrap-logo.svg"
            alt=""
            width="30"
            height="24"
          />
          nboard
        </a>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
          <a className="btn btn-outline-primary me-md-2" href="/login">
            Login
          </a>
          <a className="btn btn-primary" href="/signup">
            Sign-up
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
