import React from "react";
import { styled } from "styled-components";
import gallery from "../../assets/chat/gallery.png";
import deleteBtn from "../../assets/chat/deleteBtn.png";
import send from "../../assets/chat/send.png";
import { useState, useRef } from "react";
import { publishMessage } from "../../api/stomp";
import { useParams } from "react-router-dom";
import imageCompression from "browser-image-compression";
const Form = ({ setIsModalVisible }) => {
  const [text, setText] = useState("");
  const [imgFile, setImgFile] = useState();
  const [previewImg, setPreviewImg] = useState(null);
  const imgRef = useRef();
  const { roomId } = useParams();

  //사진 첨부 및 미리보기
  const uploadImg = () => {
    let file = imgRef.current.files[0];
    setImgFile(file);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewImg(reader.result);
    };
  };
  //사진 첨부 취소
  const deleteImg = () => {
    imgRef.current.value = "";
    setPreviewImg();
    setImgFile();
  };
  //메세지 전송 ( stompjs: send )
  const sendMessage = () => {
    if (imgFile) {
      sendImg();
    } else {
      text && sendText();
    }
  };

  const sendText = () => {
    publishMessage(roomId, 0, text);
    setText("");
  };
  const sendImg = async () => {
    //이미지파일 1MB이하로 압축, BASE64로 인코딩한 뒤 전송
    const options = {
      maxSizeMB: 1,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(imgFile, options);

      const compressedreader = new FileReader();
      compressedreader.readAsDataURL(compressedFile);
      compressedreader.onloadend = () => {
        publishMessage(roomId, 1, compressedreader.result);
      };
      setPreviewImg();
      setImgFile();
    } catch (err) {
      alert("파일 사이즈가 너무 커서 전송할 수 없습니다.");
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <Wrapper $previewImg={previewImg}>
      {previewImg ? (
        <PreviewContainer>
          <PreviewImg>
            <img src={previewImg} alt=""></img>
            <DeleteBtn onClick={deleteImg}>
              <img className="deleteBtn" src={deleteBtn} alt="삭제" />
            </DeleteBtn>
          </PreviewImg>
        </PreviewContainer>
      ) : (
        <></>
      )}
      <Line />
      <Inputs onSubmit={handleSubmit}>
        <Text>
          <input
            accept=".jpg, .jpeg, .png"
            type="file"
            id="file"
            multiple
            onChange={uploadImg}
            ref={imgRef}
          />
          <label htmlFor="file">
            <ImgBtn>
              <img src={gallery} alt="사진첨부버튼" />
            </ImgBtn>
          </label>
          <input
            placeholder="메세지를 입력하세요."
            value={text}
            onChange={e => {
              setText(e.target.value);
            }}
          />
        </Text>

        <SubmitBtn onClick={sendMessage}>
          <img src={send} alt="전송" />
        </SubmitBtn>
      </Inputs>
    </Wrapper>
  );
};

export default Form;
const Wrapper = styled.div`
  display: flex;
  height: ${props => (props.$previewImg ? "222px" : "75px")};
`;
const DeleteBtn = styled.div`
  position: absolute;
  top: 11px;
  left: 100px;

  .deleteBtn {
    width: 29px;
    height: 29px;
  }
`;
const PreviewImg = styled.div`
  position: relative;
  margin: auto;
  width: 270px;
  height: 130px;
  flex-shrink: 0;
  border-radius: 13px;
  img {
    width: 118px;
    height: 130px;
    flex-shrink: 0;
    object-fit: cover;
    border-radius: 13px;
  }
`;
const PreviewContainer = styled.div`
  width: 100%;
  height: 130px;
  position: fixed;
  bottom: 80px;
  display: flex;
  border-radius: 15px;
  background: #fff;
  align-items: center;
`;
const Inputs = styled.form`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  width: 100%;
  height: 74px;
  justify-content: center;
  background: #ffffff;
  #file {
    display: none;
  }
`;
const Line = styled.div`
  position: fixed;
  bottom: 75px;
  width: 100%;
  height: 1px;
  background: #f4f4f4;
`;
const Text = styled.div`
  margin: 8px 0px 0px 0px;
  display: flex;
  align-items: center;
  width: 322px;
  height: 45px;
  border-radius: 100px;
  background: #efefef;
  display: flex;
  input {
    margin-left: 12px;
    outline: none;
    width: 240px;
    border: none;
    background: #efefef;
    height: 20px;
    color: #656565;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const ImgBtn = styled.div`
  width: 30px;
  height: 27px;
  border: none;
  margin-left: 12px;
  margin-top: -5px;
  padding: 0;
  img {
    width: 32px;
    height: 32px;
  }
`;
const SubmitBtn = styled.div`
  margin: 13px 0px 0px 7px;

  img {
    width: 23.078px;
    height: 32.296px;
  }
`;
