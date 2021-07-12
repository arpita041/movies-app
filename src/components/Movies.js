import React from "react";
import { NavLink } from "react-router-dom";

const Movies = props => {

  const { searchVal} =
    (props.location && props.location.state) || {};
  return (
    <div>
      <NavLink to="/" activeClassName="active">
        Go Back
      </NavLink>
      <div className="form-details">
      {searchVal}
      {props.location.pathname}
      </div>
    </div>
  );
};

export default Movies;
