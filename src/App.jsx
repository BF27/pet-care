import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Landing from "./pages/Landing";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import UserProfile from "./pages/UserProfile";
import PetProfile from "./pages/PetProfile";
import { useState } from "react";
import { UserContext, ChangeUserContext } from "./contexts/userContext";

function App() {
  const [user, setUser] = useState(null);

  const changeUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <>
      <UserContext.Provider value={user}>
        <ChangeUserContext.Provider value={changeUser}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/user" element={<UserProfile />} />
            <Route path="/pet" element={<PetProfile />} />
          </Routes>
        </ChangeUserContext.Provider>
      </UserContext.Provider>
    </>
  );
}

export default App;
