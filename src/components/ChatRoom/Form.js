import React from "react";
import { styled } from "styled-components";
import gallery from "../../assets/chat/gallery.png";
import deleteBtn from "../../assets/chat/deleteBtn.png";
import { useState, useRef } from "react";
import { publishMessage } from "../../api/stomp";
import { useParams } from "react-router-dom";
import imageCompression from "browser-image-compression";
const Form = () => {
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
      console.log(previewImg);
      const compressedreader = new FileReader();
      compressedreader.readAsDataURL(compressedFile);
      compressedreader.onloadend = () => {
        publishMessage(roomId, 1, compressedreader.result);
      };
      setPreviewImg();
      setImgFile();
    } catch (err) {
      console.log("압축실패");
    }
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
        <Line />
      )}
      <Inputs>
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
        {previewImg ? (
          <div className="empty" />
        ) : (
          <Text>
            <input
              placeholder="메세지를 입력하세요."
              value={text}
              onChange={e => {
                setText(e.target.value);
              }}
            />
          </Text>
        )}
        <SubmitBtn onClick={sendMessage}>전송</SubmitBtn>
      </Inputs>
    </Wrapper>
  );
};

export default Form;
const Wrapper = styled.div`
  display: flex;
  height: ${props => (props.$previewImg ? "256px" : "90px")};
`;
const DeleteBtn = styled.div`
  position: absolute;
  top: 11px;
  right: 8px;

  .deleteBtn {
    width: 21px;
    height: 21px;
  }
`;
const PreviewImg = styled.div`
  position: relative;
  width: 133px;
  height: 146px;
  margin-left: 8px;

  img {
    width: 133px;
    height: 146px;
    object-fit: cover;
    border-radius: 10px;
  }
`;
const PreviewContainer = styled.div`
  width: 352px;
  height: 166px;
  position: fixed;
  bottom: 90px;
  margin-right: 12px;
  right: 0;
  display: flex;
  border-radius: 15px;
  background: #ffee94;
  align-items: center;
`;
const Inputs = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  width: 100%;
  height: 90px;
  justify-content: center;
  background: #ffffff;
  #file {
    display: none;
  }
  .empty {
    margin: 25px 0px 0px 7px;
    width: 280px;
    height: 42px;
  }
`;
const Line = styled.div`
  position: fixed;
  bottom: 90px;
  width: 100%;
  height: 1px;
  background: #c9c9c9;
`;
const Text = styled.div`
  margin: 25px 0px 0px 7px;
  width: 280px;
  height: 42px;
  border-radius: 100px;
  background: #efefef;
  display: flex;
  input {
    outline: none;
    margin: 11.5px 12px 11.5px 12px;
    width: 100%;
    border: none;
    background: #efefef;
    height: 19px;
    color: #656565;
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
const ImgBtn = styled.div`
  width: 32px;
  height: 32px;
  margin: 30px 0px 0px 8px;
  border: none;
  background: #ffffff;
  padding: 0;
  img {
    width: 32px;
    height: 32px;
  }
`;
const SubmitBtn = styled.div`
  margin: 25px 9px 0px 9px;
  width: 42px;
  height: 42px;
  background: #ffc701;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Noto Sans KR;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  border: none;
`;
