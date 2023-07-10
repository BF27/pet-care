import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Landing from "./pages/Landing";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import PetProfile from "./pages/PetProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/pet" element={<PetProfile />} />
      </Routes>
    </>
  );
}

export default App;
