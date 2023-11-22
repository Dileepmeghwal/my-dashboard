import React, { useState } from "react";
// import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link, Route, Router, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import App from "../App";
const About = () => <div>About Component Content</div>;
const Contact = () => <div>Contact Component Content</div>;
const Layout = () => {
  const navigation = useNavigate();
  const [collapsed, setCollapsed] = React.useState(false);
  const [selectedComponent, setSelectedComponent] = useState("home");

  const renderComponent = () => {
    switch (selectedComponent) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      default:
        return null;
    }
  };
  return (
    <div className="">
      <div style={{ display: "flex" }}>
        <Sidebar
          collapsed={collapsed}
          transitionDuration={200}
          style={{ height: "100vh" }}
        >
          <Menu>
            <MenuItem color="red" onClick={() => setSelectedComponent("home")}>
              Home
            </MenuItem>

            <MenuItem onClick={() => setSelectedComponent("about")}> Calendar</MenuItem>
            <MenuItem onClick={() => setSelectedComponent("contact")}> E-commerce</MenuItem>
            <MenuItem> Examples</MenuItem>
            <SubMenu label="Charts">
              <MenuItem> Pie charts</MenuItem>
              <MenuItem> Line charts</MenuItem>
              <MenuItem> Bar charts</MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
        <main>
          <div>
            <header>
              <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                  <button
                    className="sb-button"
                    onClick={() => setCollapsed(!collapsed)}
                  >
                    Collapse
                  </button>
                </div>
              </nav>
            </header>
            {renderComponent()}
          </div>
          <Home />
        </main>
      </div>
    </div>
  );
};

export default Layout;
