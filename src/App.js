import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./Component/Admin/Admin";
import NotFound from "./Component/NotFound";
import Home from "./Component/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="admin" element={<Admin />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
