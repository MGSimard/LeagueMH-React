import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";

export const NotFound = () => {
  const error = useRouteError();

  return (
    <div className="notFoundContainer">
      <h1>Page Not Found.</h1>
      <h2>Sorry, an un(expected) error has occured.</h2>
      <p className="notFoundStatus">Error Message: {error?.statusText}</p>
      <h2 className="returnLink">
        <Link to="/">Return Home</Link>
      </h2>
    </div>
  );
};
