import { Routes, Route } from "react-router-dom";
import ChatListPage from "./pages/ChatListPage";
function App() {
  return (
    <Routes>
      <Route path="/chats" element={<ChatListPage />} />
    </Routes>
  );
}

export default App;
