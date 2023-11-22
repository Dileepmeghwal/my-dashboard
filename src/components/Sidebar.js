import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
  FaChevronCircleDown,
} from "react-icons/fa";
import { Switch } from "antd";

const Sidebar = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  const [dir, setDir] = useState(localStorage.getItem("direction") || "ltr");

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
      arrow: <FaChevronCircleDown />,

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
      path: "/productList",
      name: "Product List",
      icon: <FaThList />,
    },
    {
      path: "/screen",
      name: "Full Screen",
      icon: <FaThList />,
    },
  ];

  const onChange = (checked) => {
    // console.log(`switch to ${checked}`);
    const newDirection = dir === "ltr" ? "rtl" : "ltr";
    setDir(newDirection);
    localStorage.setItem("direction", newDirection);
    document.documentElement.dir = newDirection;
  };

  function changeDir() {
    const newDirection = dir === "ltr" ? "rtl" : "ltr";
    setDir(newDirection);
    localStorage.setItem("direction", newDirection);
    document.documentElement.dir = newDirection;
  }

  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);
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
              {item.arrow}
            </NavLink>
            {item.subMenu &&
              item.subMenu.map((item) => (
                <div className="sub-menu">
                  <NavLink to={item.path}>
                    <div>{item.name}</div>
                  </NavLink>
                </div>
              ))}
          </>
        ))}
        <div className="direction-toggle mx-3">
          <Switch onChange={onChange} />
        </div>
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
