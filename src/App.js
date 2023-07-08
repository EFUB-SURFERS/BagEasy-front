import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp";
import Nickname from "./pages/nickname";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/nickname" element={<Nickname />} />
    </Routes>
  );
}

export default App;
