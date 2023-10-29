import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { getNotices } from "../api/notice";
import TokenRefreshModal from "../components/Common/TokenRefreshModal";
import Header from "../components/notification/Header";
import Notification from "../components/notification/Notification";

const NotificationPage = () => {
  const [notices, setNotices] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);

  //알림 목록 조회
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getNotices();
        setNotices(data);
      } catch (err) {
        if (err.response && err.response.data.code === "EXPIRED_TOKEN") {
          setIsModalVisible(true);
        }
      }
    }

    fetchData();
  }, []);

  return (
    <Root>
      {isModalVisible && <TokenRefreshModal />}
      <Header />
      <Wrapper>
        {notices &&
          notices.map(notice => (
            <Notification
              nickname={notice.senderNickname}
              content={notice.noticeContent}
            />
          ))}

        <Notification
          nickname="catcat"
          content="거래 원합니다. 연락 확인 부탁드려요."
        />
        <Notification
          nickname="catcat"
          content="거래 원합니다. 연락 확인 부탁드려요."
        />
        <Notification
          nickname="catcat"
          content="거래 원합니다. 연락 확인 부탁드려요."
        />
        <Notification
          nickname="catcat"
          content="거래 원합니다. 연락 확인 부탁드려요."
        />
        <Notification
          nickname="catcat"
          content="거래 원합니다. 연락 확인 부탁드려요."
        />
      </Wrapper>
    </Root>
  );
};

const Root = styled.div``;

const Wrapper = styled.div`
  margin-top: 50px;
`;

export default NotificationPage;
