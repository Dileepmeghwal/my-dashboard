import React, { useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { FaDashcube } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";

function getItem(label, key, icon, children, type, keyPath) {
  console.log(keyPath);
  return {
    key,
    icon,
    children,
    label,
    type,
    keyPath,
  };
}
const items = [
  getItem("Dashboard", "/home", <FaDashcube />),

  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("Option 3", "3", <ContainerOutlined />),
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Option 7", "7"),
    getItem("Option 8", "8"),
  ]),
  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ]),
];

const SidebarPro = ({ children }) => {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  function event(e) {
    console.log(e);
  }

  console.log(document.fullscreenElement);

  return (
    <div className="d-flex">
      <button onClick={event}>Click</button>
      <Menu
        style={{
          width: 256,
          height: "100vh",
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        onClick={(e) => {
          navigate(`/${e.key}`);
          console.log(e.key);
        }}
      />
      <main>
        <Button type="primary" onClick={toggleCollapsed}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        {children}
      </main>
    </div>
  );
};

export default SidebarPro;
