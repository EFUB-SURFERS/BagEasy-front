# EFUB 3기 SWS 1팀 BagEasy 프론트 레포지토리

## 🧳 BagEasy 서비스 설명

<img width="600" alt="start" src="https://github.com/EFUB-SURFERS/BagEasy-front/assets/97157930/04bba489-e5c6-4fb3-808d-098947baacaa">


- [x] `BagEasy`는 교환학생을 위한 짐 양도 서비스입니다.
- [x] 기존의 짐 양도 플랫폼들은 여러 곳으로 분산되어 있어 사용자로 하여금 불편함을 초래하는 문제점이 있었습니다.
- [x] 저희 서비스는 이러한 문제점을 해소하기 위해 통합된 형태의 서비스를 제공하고자 했습니다.
- [x] 판매자는 양도하고자 하는 물건을 간편하게 올리고, 구매자는 채팅을 통해 빠르게 판매자와 소통할 수 있도록 개발했습니다.

<br>

## 👥 팀원 소개

| 김예진                                                                                                                                                                         | 곽지우                                                                                                                                                                         | 송지민                                                                                                                                                                         | 이주희                                                                                                                                                                         | 조정민                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <img width="150px" alt="스크린샷 2023-07-25 오전 12 46 14" src="https://github.com/EFUB-SURFERS/BagEasy-front/assets/104717341/71dc6f6c-706d-43b5-951e-7a2a1ac78904"> | <img width="150px" alt="스크린샷 2023-07-25 오전 12 45 48" src="https://github.com/EFUB-SURFERS/BagEasy-front/assets/104717341/cf199ccc-fe99-4a5d-a045-f8be0f71e450"> | <img width="150px" alt="스크린샷 2023-07-25 오전 12 45 37" src="https://github.com/EFUB-SURFERS/BagEasy-front/assets/104717341/678ff507-7836-4c9c-ba4f-a58a2b9b9896"> | <img width="150px" alt="스크린샷 2023-07-25 오전 12 45 37" src="https://github.com/EFUB-SURFERS/BagEasy-front/assets/104717341/76e28349-f536-46bc-8341-c46f8d3dab37"> | <img width="150px" alt="스크린샷 2023-07-25 오전 12 46 00" src="https://github.com/EFUB-SURFERS/BagEasy-front/assets/97157930/a73f8040-80b0-49f7-a892-205ee0381be4"> |
| 시작 페이지 <br> 거래내역 페이지 <br> 마이페이지                                                                                                                               | 판매글 열람 페이지 <br> 판매글 작성 페이지                                                                                                                                     | 채팅 목록 페이지 <br> 채팅방 페이지 <br> 학교 설정 모달                                                                                                                        | 구글 로그인 페이지 <br> 닉네임 설정 페이지 <br> 랜덤 프로필 생성                                                                                                                                    | 메인 페이지 <br> 찜 목록 페이지 <br> 댓글 컴포넌트                                                                                                                             |

<br>

## 💻 기술 스택

### Main

<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"> <img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">

### Team Collaboration Tool

<img src="https://img.shields.io/badge/notion-EBEBEB?style=for-the-badge&logo=notion&logoColor=000000"> <img src="https://img.shields.io/badge/github-292727?style=for-the-badge&logo=github&logoColor=white"> <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">

### Styles

<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

### Code Formmater

<img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=black">

<br>

## 🔗 웹사이트 배포 링크

https://bageasy.vercel.app/

<br>

## ✨ 주요 기능

### 🌐 구글 로그인

- 구글 계정을 사용하여 간편하게 로그인
- 처음 가입시 닉네임 설정(유효성 검사, 중복 검사)
- 닉네임 바탕으로 랜덤 프로필 생성
- 토큰 만료시 재발급

### 🔍 양도글 검색

- 학교별 양도글 검색
- 판매 중인 양도글 검색

### ❤️ 찜하기

- 하트를 눌러서 찜 목록에 저장

### 💰 거래 내역 확인

- 나의 판매내역과 구매내역 확인

### ✏️ 양도글 작성

- 사진 업로드 및 학교, 가격 설정
- 제목과 내용 작성

### 📖 양도글 열람

- 양도글의 세부내용 확인

### 🗨️ 댓글

- 양도글 하단에서 댓글 작성/열람
- 대댓글, 비밀댓글, 답글 기능

### ✉️ 채팅

- 양도글 하단에서 채팅하기 버튼 클릭
- 실시간 채팅 및 이미지 전송 가능

<br/>

## 🖼️ 화면 구성

<table>
	<th>🌐 구글 로그인</th>
	<th>📜 양도글 목록</th>
	<th>🔍 학교별 검색</th>
	<th>👤 마이페이지</th>
	<th>❤️ 찜 목록</th>
	<tr>
		<td><img width="200px" src="https://github.com/EFUB-SURFERS/BagEasy-front/assets/97157930/bca4c652-6510-43c9-9dea-6ac6c2555503"></td>
		<td><img width="200px" src="https://github.com/EFUB-SURFERS/BagEasy-front/assets/97157930/4d9597f7-7a5e-41a3-aac6-c6a41a78af7e"></td>
		<td><img width="198px" src="https://github.com/EFUB-SURFERS/BagEasy-front/assets/97157930/67ec6d27-2b2e-4d5d-968d-6e8c429a3daf"></td>
		<td><img width="190px" src="https://github.com/EFUB-SURFERS/BagEasy-front/assets/97157930/d735249d-8f4e-4da0-bcb2-b4441885279e"></td>
		<td><img width="200px" src="https://github.com/EFUB-SURFERS/BagEasy-front/assets/97157930/e95042f6-7bf6-4c3e-b2dd-8adaeea7e4d9"></td>
	</tr>
</table>
<br/>
<table>
	<th>💰 거래 내역</th>
	<th>✏️ 양도글 작성</th>
	<th>📖 양도글 열람</th>
	<th>🗨️ 댓글</th>
	<th>✉️ 채팅</th>
	<tr>
		<td><img width="198px" src="https://github.com/EFUB-SURFERS/BagEasy-front/assets/97157930/ab35669f-f49d-4c85-9583-fc90a93e0e19"></td>
		<td><img width="203px" src="https://github.com/EFUB-SURFERS/BagEasy-front/assets/97157930/58b3439f-7c2e-46ea-b2be-0202acc0c530"></td>
		<td><img width="189px" src="https://github.com/EFUB-SURFERS/BagEasy-front/assets/97157930/8f4c3e1b-e638-4c7d-9bce-00c5ce29b2fa"></td>
		<td><img width="190px" src="https://github.com/EFUB-SURFERS/BagEasy-front/assets/97157930/6f9d87bd-4b96-4dc2-b755-183d3f4cb80a"></td>
		<td><img width="200px" src="https://github.com/EFUB-SURFERS/BagEasy-front/assets/97157930/973e4ac1-c6db-4741-a858-fe88f135f7ac"></td>
	</tr>
</table>

<br>

## 📁 폴더 구조

```javascript
BagEasy-front
├─ .gitignore
├─ .prettierrc
├─ node_modules
├─ package-lock.json
├─ package.json
├─ README.md
├─ public
│  ├─ index.html
│  ├─ logo.png
│  └─ robots.txt
└─ src
   ├─ App.js
   ├─ assets
   ├─ index.js
   ├─ Redux
   │  └─ chatRedux.js
   ├─ styles
   │  └─ global.css
   ├─ api
   │  ├─ chat.js
   │  ├─ client.js
   │  ├─ comments.js
   │  ├─ likes.js
   │  ├─ member.js
   │  ├─ nickname.js
   │  ├─ posts.js
   │  ├─ replies.js
   │  ├─ stomp.js
   │  ├─ uni.js
   │  └─ url.js
   ├─ pages
   │  ├─ ChatListPage.js
   │  ├─ ChatRoomPage.js
   │  ├─ CreateSalesPage.js
   │  ├─ DetailPage.js
   │  ├─ EmptyPage.js
   │  ├─ FavoritesPage.js
   │  ├─ GoogleLoginPage.js
   │  ├─ ItemListPage.js
   │  ├─ LoadingPage.js
   │  ├─ ModifySalesPage.js
   │  ├─ MyPage.js
   │  ├─ NicknamePage.js
   │  ├─ Purchase.js
   │  └─ Start.js
   └─ components
      ├─ ChatList
      │  ├─ Item.js
      │  └─ List.js
      ├─ ChatRoom
      │  ├─ Form.js
      │  ├─ Header.js
      │  ├─ MessagesContainer.js
      │  ├─ Modal.js
      │  ├─ MyMessage.js
      │  └─ YourMessage.js
      ├─ Common
      │  ├─ Header.js
      │  ├─ Profile.js
      │  └─ TokenRefreshModal.js
      ├─ CreateSales
      │  └─ SalesContent.js
      ├─ detail
      │  ├─ Footer.js
      │  ├─ Header.js
      │  ├─ ItemContent.js
      │  ├─ ItemInfo.js
      │  └─ SubMenuModal.js
      ├─ ItemList
      │  ├─ Buttons.js
      │  ├─ Comment.js
      │  ├─ CommentHeader.js
      │  ├─ CommentInput.js
      │  ├─ CommentList.js
      │  ├─ CommentModal.js
      │  ├─ CommentReplies.js
      │  ├─ Item.js
      │  ├─ List.js
      │  ├─ ReplyList.js
      │  ├─ SearchBar.js
      │  ├─ Toggle.js
      │  └─ WriteBtn.js
      ├─ ModifySales
      │  └─ SalesContent.js
      ├─ MyPage
      │  ├─ Contents.js
      │  ├─ ListItem.js
      │  └─ UserInfo.js
      ├─ Purchase
      │  ├─ Bar.js
      │  ├─ BuyItem.js
      │  ├─ SharedStyles.js
      │  └─ SoldItem.js
      ├─ Route
      │  └─ PrivateRoute.js
      └─ UpdateUni
         ├─ Modal.js
         └─ SearchBar.js
```
