import { Routes, Route } from "react-router-dom";
import ChatListPage from "./pages/ChatListPage";
import ChatRoomPage from "./pages/ChatRoomPage";
function App() {
  return (
    <Routes>
      <Route path="/chats" element={<ChatListPage />} />
      <Route path="/chats/1" element={<ChatRoomPage />} />
    </Routes>
  );
}

export default App;
