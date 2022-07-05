import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
      <h4>Error 404 page not found</h4>
      <br />
      <h4>
        you can go to our home page by clicking <Link to="/">here</Link>
      </h4>
    </>
  );
};

export default Error;
