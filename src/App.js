import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Comment from "./pages/Comment";
import Analytics from "./pages/Analytics";
import Products from "./pages/Products";
import SidebarPro from "./components/SidebarPro";

function App() {
  return (
    <>
      <SidebarPro>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Products />} />
        </Routes>
      </SidebarPro>
      {/* <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Products />} />
        </Routes>
      </Sidebar> */}
    </>
  );
}

export default App;
