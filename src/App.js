import "./App.css";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Layout from "./pages/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" Component={Layout} />
    </Routes>
  );
}

export default App;
