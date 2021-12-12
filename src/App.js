import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./pages/login/index.jsx";
import Admin from "./pages/admin/index.jsx";

// 应用的根组件
function App() {
  return (
    <Router>
      <Routes>
        {/* 旧版本6.x以下使用Switch */}
        <Route exact path="/" element={<Admin />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
