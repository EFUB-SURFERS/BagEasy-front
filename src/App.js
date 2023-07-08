import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/signUp";
import Nickname from "./pages/nickname";
import ChatListPage from "./pages/ChatListPage";
import ChatRoomPage from "./pages/ChatRoomPage";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/nickname" element={<Nickname />} />
      <Route path="/chats" element={<ChatListPage />} />
      <Route path="/chats/1" element={<ChatRoomPage />} />
    </Routes>
  );
}

export default App;
