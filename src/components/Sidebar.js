import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";

const Sidebar = ({ children }) => {
  const [toggle, setToggle] = useState(true);

  const toggleSidebar = () => {
    setToggle(!toggle);
  };
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />,
      
      subMenu: [
        {
          path: "/analytics/report1",
          name: "Report 1",
        },
        {
          path: "/analytics/report2",
          name: "Report 2",
        },
      ],
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <FaCommentAlt />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />,
    },
    {
      path: "/productList",
      name: "Product List",
      icon: <FaThList />,
    },
  ];
  return (
    <div className="wrapper">
      <div className="sidebar" style={{ width: toggle ? "260px" : "60px" }}>
        <div className="top_section">
          <h2
            className="text-white"
            style={{ display: toggle ? "block" : "none" }}
          >
            Logo
          </h2>
          <div className="bars" style={{ marginLeft: toggle ? "50px" : "0px" }}>
            <FaBars onClick={toggleSidebar} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <>
            <NavLink
              className={"d-flex align-items-center  link"}
              to={item.path}
              activeClassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div
                className="link-text"
                style={{ display: toggle ? "block" : "none" }}
              >
                {item.name}
              </div>
            </NavLink>
            {item.subMenu &&
              item.subMenu.map((item) => (
                <NavLink to={item.path} className={"submenu"}>
                  <div>{item.name}</div>
                </NavLink>
              ))}
          </>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
