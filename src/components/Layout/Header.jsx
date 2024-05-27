import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <h1>
        <Link to="/">LOLMH.REACT</Link>
      </h1>
      <div className="header-divider"></div>
    </header>
  );
};
