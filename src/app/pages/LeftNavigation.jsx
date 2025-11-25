import React, { useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const LeftNavigation = ({ links }) => {
  return (
    <div className="left-navigation">
      {links.map((link, idx) => (
        <NavLink key={idx} className="left-navigation__link" to={link.url}>
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

export default LeftNavigation;
