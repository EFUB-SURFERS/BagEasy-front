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
import MyPage from "./pages/MyPage";
import Start from "./pages/Start";
import Purchase from "./pages/Purchase";

import PrivateRoute from "./components/Route/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/login" element={<GoogleLogin />} />
      <Route path="/loading" element={<Loading />} />
      {/* 로그인 해야 접근 가능한 페이지 */}
      <Route element={<PrivateRoute />}>
        <Route path="/nickname" element={<Nickname />} />
        <Route path="/home" element={<ItemListPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/chats" element={<ChatListPage />} />
        <Route path="/chats/:roomId" element={<ChatRoomPage />} />
        <Route path="/detail/:postId" element={<DetailPage />} />
        <Route path="/create" element={<CreateSalesPage />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/deal" element={<Purchase />} />
      </Route>
    </Routes>
  );
}

export default App;
