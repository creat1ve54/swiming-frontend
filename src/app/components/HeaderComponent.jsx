import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Svg from "../../assets/svg/Svg";
import Breadcrumbs from "./Breadcrumbs";

const HeaderComponent = ({ title, link }) => {  
  // const location = useLocation();
  return (
    <div className="header-component">
      <div className="header-component__title">
        <NavLink to={link} state={{title: title}}>
          <Svg
            name={"arrowLeftLink"}
            width={40}
            height={40}
            color={"#4C74C1"}
          />
        </NavLink>
        <h1>{title}</h1>
      </div>
      <Breadcrumbs />
    </div>
  );
};

export default HeaderComponent;
