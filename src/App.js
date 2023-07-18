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
import Modal from "./components/UpdateUni/Modal";

import { useState } from "react";

function App() {
  //모달 테스트용 임시 코드
  const [isOpen, setIsOpen] = useState(true);
  const [uni, setUni] = useState("");
  return (
    <Routes>
      <Route path="/login" element={<GoogleLogin />} />
      <Route path="/loading" element={<Loading />} />
      <Route path="/nickname" element={<Nickname />} />
      <Route path="/home" element={<ItemListPage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/chats" element={<ChatListPage />} />
      <Route path="/chats/1" element={<ChatRoomPage />} />
      <Route path="/detail/1" element={<DetailPage />} />
      <Route path="/create" element={<CreateSalesPage />} />
      <Route
        path="/uni"
        element={
          <Modal
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            uni={uni}
            setUni={setUni}
          />
        }
      />
    </Routes>
  );
}

export default App;
