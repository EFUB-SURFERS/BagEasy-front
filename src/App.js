import { Routes, Route } from "react-router-dom";
import GoogleLogin from "./pages/GoogleLoginPage";
import Nickname from "./pages/NicknamePage";
import ChatListPage from "./pages/ChatListPage";
import ChatRoomPage from "./pages/ChatRoomPage";
import Loading from "./pages/LoadingPage";
import DetailPage from "./pages/DetailPage";
import CreateSalesPage from "./pages/CreateSalesPage";
import ModifySalesPage from "./pages/ModifySalesPage";
import ItemListPage from "./pages/ItemListPage";
import FavoritesPage from "./pages/FavoritesPage";
import MyPage from "./pages/MyPage";
import Start from "./pages/Start";
import Purchase from "./pages/Purchase";

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
      <Route path="/detail/:postId" element={<DetailPage />} />
      <Route path="/create" element={<CreateSalesPage />} />
      <Route path="/modify/:postId" element={<ModifySalesPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/deal" element={<Purchase />} />
      <Route path="/" element={<Start />} />
    </Routes>
  );
}

export default App;
