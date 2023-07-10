import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUpPage";
import Nickname from "./pages/NicknamePage";
import ChatListPage from "./pages/ChatListPage";
import ChatRoomPage from "./pages/ChatRoomPage";
import DetailPage from "./pages/DetailPage";
import CreateSalesPage from "./pages/CreateSalesPage";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/nickname" element={<Nickname />} />
      <Route path="/chats" element={<ChatListPage />} />
      <Route path="/chats/1" element={<ChatRoomPage />} />
      <Route path="/detail/1" element={<DetailPage />} />
      <Route path="/create" element={<CreateSalesPage />} />
    </Routes>
  );
}

export default App;
