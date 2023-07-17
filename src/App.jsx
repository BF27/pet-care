import { useNavigate, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import PetProfile from "./pages/PetProfile";
import Dashboard from "./pages/dashboard";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { UserContext, ChangeUserContext } from "./contexts/userContext";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "./styles/App.css";

function App() {
  const [auth, setAuth] = useState(getAuth());
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/dashboard");
      }
    });
  }, [auth]);

  const changeUser = (newUser) => {
    setAuth(newUser);
  };

  return (
    <>
      <UserContext.Provider value={auth}>
        <ChangeUserContext.Provider value={changeUser}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/user" element={<UserProfile />} />
            <Route path="/pet" element={<PetProfile />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/header" element={<Header />} />
          </Routes>
        </ChangeUserContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
