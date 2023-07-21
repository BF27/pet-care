import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import Dashboard from "./pages/dashboard";
import PetProfile from "./pages/PetProfile";
import "./styles/App.css";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/user" element={<UserProfile />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/pet" element={<PetProfile />} />
    </Routes>
  );
}

export default App;
