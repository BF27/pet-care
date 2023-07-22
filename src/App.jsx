import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import Dashboard from "./pages/dashboard";
import PetProfile from "./pages/PetProfile";
import "./styles/App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { UserContext, ChangeUserContext } from "./contexts/UserContext";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/initFirebase";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const changeUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <UserContext.Provider value={user}>
          <ChangeUserContext.Provider value={changeUser}>
            <Header />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/user" element={<UserProfile />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/pet" element={<PetProfile />} />
            </Routes>
          </ChangeUserContext.Provider>
        </UserContext.Provider>
      </LocalizationProvider>
    </>
  );
}

export default App;
