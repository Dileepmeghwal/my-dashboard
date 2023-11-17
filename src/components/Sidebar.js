import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-details">
        <i class="bx bxl-c-plus-plus"></i>
        <span class="logo_name">CodingLab</span>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link>
              <i className="bx bx-grid-alt"></i>
              <span>Dashboard</span>
            </Link>
          </li>

          <li>
            <Link>
              <div className="icon-link">
                <i className="bx-collection"></i>
                <span>Category</span>
              </div>
              <ul className="sub-menu">
                <li>
                  <Link>
                    <span>HTML & CSS</span>
                  </Link>
                </li>
                <li>
                  <Link>
                    <span>Javascript</span>
                  </Link>
                </li>
                <li>
                  <Link>
                    <span>Node js</span>
                  </Link>
                </li>
              </ul>
            </Link>
          </li>

          <li>
            <Link>
              <i className="bx bx-pie-chart-alt-2"></i>
              <span>Analytics</span>
            </Link>
          </li>
          <li>
            <Link>
              <div className="icon-link">
                <i className="bx bx-book-alt"></i>
                <span>Posts</span>
              </div>
              <ul className="sub-menu">
                <li>
                  <Link>
                    <span>Web designe</span>
                  </Link>
                </li>
                <li>
                  <Link>
                    <span>Card Designe</span>
                  </Link>
                </li>
                <li>
                  <Link>
                    <span>Android </span>
                  </Link>
                </li>
              </ul>
            </Link>
          </li>
          <li>
            <Link>
              <i className="bx bx-line-chart"></i>
              <span>Chart</span>
            </Link>
          </li>
          <li>
            <Link>
              <i className="bx bx-plug"></i>
              <span>Plugins</span>
            </Link>
          </li>
          <li>
            <Link>
              <i className="bx bx-history"></i>
              <span>History</span>
            </Link>
          </li>
          <li>
            <Link>
              <i className="bx bx-history"></i>
              <span>Setting</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
