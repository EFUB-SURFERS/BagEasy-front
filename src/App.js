import { Routes, Route } from "react-router-dom";
import GoogleLogin from "./pages/GoogleLoginPage";
import Nickname from "./pages/NicknamePage";
import ChatListPage from "./pages/ChatListPage";
import ChatRoomPage from "./pages/ChatRoomPage";
import Loading from "./pages/LoadingPage";
import DetailPage from "./pages/DetailPage";
import CreateSalesPage from "./pages/CreateSalesPage";
import ItemListPage from "./pages/ItemListPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<GoogleLogin />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/nickname" element={<Nickname />} />
      <Route path="/home" element={<ItemListPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/chats" element={<ChatListPage />} />
      <Route path="/chats/:roomId" element={<ChatRoomPage />} />
      <Route path="/detail/1" element={<DetailPage />} />
      <Route path="/create" element={<CreateSalesPage />} />
    </Routes>
  );
}

export default App;
