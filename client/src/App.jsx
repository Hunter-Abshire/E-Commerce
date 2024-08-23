import "./App.css";
import AuthProvider from "./AuthProvider.jsx";
import ProtectedRoute from "../components/protectedRoute.jsx";
import Login from "../components/login.jsx";
import View from "../components/view.jsx";
import Home from "../components/Home.jsx";
import SignUp from "../components/SignUp.jsx";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Signup' element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/view" element={<View />} />
            </Route>
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}
export default App;