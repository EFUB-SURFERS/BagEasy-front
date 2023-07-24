# EFUB 3기 SWS 1팀 BagEasy 프론트 레포지토리

## 🧳 서비스 설명
<img width="480" alt="스크린샷 2023-07-25 오전 12 53 55" src="https://github.com/EFUB-SURFERS/BagEasy-front/assets/104717341/6861a20e-9762-4b24-99b6-fbb6c598bdbd">

- [x] `BagEasy`는 교환학생을 위한 짐 양도 서비스입니다.
- [x] 기존의 짐 양도 플랫폼들은 여러 곳으로 분산되어 있어 사용자로 하여금 불편함을 초래하는 문제점이 있었습니다.
- [x] 저희 서비스는 이러한 문제점을 해소하기 위해 통합된 형태의 서비스를 제공하고자 했습니다.
- [x] 판매자는 양도하고자 하는 물건을 간편하게 올리고, 구매자는 채팅을 통해 빠르게 판매자와 소통할 수 있도록 개발했습니다.
      
<br>

## 👥 팀원 소개
|김예진|곽지우|송지민|이주희|조정민|
|---|---|---|---|---|
|<img width="150px" alt="스크린샷 2023-07-25 오전 12 46 14" src="https://github.com/EFUB-SURFERS/BagEasy-front/assets/104717341/71dc6f6c-706d-43b5-951e-7a2a1ac78904">|<img width="150px" alt="스크린샷 2023-07-25 오전 12 45 48" src="https://github.com/EFUB-SURFERS/BagEasy-front/assets/104717341/cf199ccc-fe99-4a5d-a045-f8be0f71e450">|<img width="150px" alt="스크린샷 2023-07-25 오전 12 45 37" src="https://github.com/EFUB-SURFERS/BagEasy-front/assets/104717341/678ff507-7836-4c9c-ba4f-a58a2b9b9896">|<img width="150px" alt="스크린샷 2023-07-25 오전 12 45 37" src="https://github.com/EFUB-SURFERS/BagEasy-front/assets/104717341/76e28349-f536-46bc-8341-c46f8d3dab37">|<img width="150px" alt="스크린샷 2023-07-25 오전 12 46 00" src="https://github.com/EFUB-SURFERS/BagEasy-front/assets/104717341/07779d2c-e6e8-4b87-9e79-b2cbce093636">|
|시작 페이지 <br> 거래내역 페이지 <br> 마이페이지|판매글 열람 페이지 <br> 판매글 작성 페이지|채팅 페이지|구글 로그인 페이지 <br>  닉네임 설정 페이지|메인 페이지 <br>  찜 목록 페이지| 

<br>

## 🔗 기술 스택
- `Main` : react, react-router-dom 
- `Styles` : styled-components
- `Code Formmater` : prettier
- `Team Collaboration Tool` : github, notion, figma

<br>

## 📁 폴더 구조
```
├── node_modules
├── README.md
├── package-lock.json
├── package.json
├── .gitignore
├── public
│   ├── index.html
│   ├── logo.png
│   ├── manifest.json
│   ├── robots.txt
└── src
    ├── App.js
    ├── index.js
    ├── styles
    ├── assets
    ├── api
    │	├── chat.js
    │	├── client.js
    │   ├── member.js
    │   ├── nickname.js
    │   ├── posts.js
    │   ├── stomp.js
    │   ├── uni.js
    │   └── url.js
    ├── pages
    │	├── ChatListPage.js
    │	├── ChatRoopmPage.js
    │   ├── CreateSalesPage.js
    │   ├── DetailPage.js
    │   ├── FavoritesPage.js
    │   ├── GoogleLoginPage.js
    │   ├── ItemListPage.js
    │   ├── LoadingPage.js
    │   ├── MyPage.js
    │   ├── NicknamePage.js
    │   ├── Purchase.js
    │   └── Start.js
    └── components
	├── ChatList
	│   ├── Item.js
	│   └── List.js
	├── ChatRoom
	│   ├── Form.js
	│   ├── Header.js
	│   ├── MessagesContainer.js
	│   ├── Modal.js
	│   ├── MyMessage.js
	│   └── YourMessage.js
	├── Common
	│   ├── Header.js
	│   └── Profile.js
	├── CreateSales
	│   ├── Header.js
	│   └── SalesContent.js
	├── ItemList
	│   ├── Buttons.js
	│   ├── Comment.js
	│   ├── CommentList.js
	│   ├── Footer.js
	│   ├── Item.js
	│   ├── List.js
	│   ├── SearchBar.js
	│   └── Toggle.js
	├── MyPage
	│   ├── Contents.js
	│   ├── ListItem.js
	│   └── UserInfo.js
	├── Purchase
	│   ├── Bar.js
	│   ├── BuyItem.js
	│   ├── SharedStyles.js
	│   └── SoldItem.js
	├── UpdateUni
	│   ├── Modal.js
	│   └── SearchBar.js
	└── datail
	    ├── Footer.js
	    ├── Header.js
	    ├── ItemContainer.js
	    ├── ItemInfo.js
	    └── SubMenuModal.js
```  	  
