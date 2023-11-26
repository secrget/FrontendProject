import {BrowserRouter as Router ,Routes ,Route} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Reg from "./pages/Reg";
import User_page from "./pages/User_page";
import Selection_page from "./pages/Selection_page";





function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registration" element={<Reg />} />
                <Route path="/user_page" element={<User_page />} />
                <Route path="/selection_page" element={<Selection_page />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;

