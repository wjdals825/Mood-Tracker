import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "./components/sidebar.js";
import Daily from "./pages/Daily.js";
import Monthly from "./pages/Monthly.js";

import Modal from "react-modal";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  overflow: hidden;
`;

const ModalStyle = {

  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.45)",
    zIndex: 10,
  },
  content: {
    paddingLeft: "5%",
    background: "#3b3b3b",
    overflow: "auto",
    top: "20vh",
    left: "20vw",
    right: "20vw",
    bottom: "20vh",
    WebkitOverflowScrolling: "touch",
    borderRadius: "14px",
    outline: "none",
    zIndex: 10,
    color: "#fff"
  },
};

const ModalInner = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 6%;
  flex-wrap: wrap;
`;

const ModalTitle = styled.div`
  font-family: "YdestreetL";
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  border-left: 1px solid #fff;
  height: fit-content;
  padding: 0px 10px;
`;

const SmallFont = styled.div`
  font-family: "YdestreetL";
  font-size: 14px;
`;

const BigFont = styled.div`
  font-family: "YdestreetB";
  font-size: 24px;
  display: flex;
  width: 100%;
  padding-bottom: 10px;
`;

const ModalContent = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 5%;
`;

const ModalInput = styled.div`
  width: 100%;
  margin-bottom: 20px;
  p {
    font-family: "YdestreetB";
    font-size: 14px;
  }

  input {
    width: 80%;
    height: 30px;
    padding: 0px 10px;
    border-radius: 8px;
    border: 1px solid #999898;
    font-family: "YdestreetL";
  }

  input:focus {
    outline: 0.8px solid #2e2e2e;
  }
`;

const ModalFooter = styled.div`
  padding-top: 2%;
  width: 100%;
  button {
    font-family: "YdestreetL";
    border: 1px solid #cccbcb;
    background: #fff;
    border-radius: 6px;
    height: 35px;
    width: 150px;
    cursor: pointer;
  }
`;

export default function App() {
  // console.log("Welcome to my MoodTracker!  📮contact Me : r.jm00606@gmail.com");
  let checkUser = localStorage.getItem("userInfo");
  const [userInfo, setNowUser] = useState(checkUser? checkUser : '')
  const [modalIsOpen, setModalIsOpen] = useState(checkUser ? false : true);
  const [infoSetting, setUserInfo] = useState({ nickName: "", id: "" });
  const MySwal = withReactContent(Swal)


  const userInfoChange = (e) => {
    setUserInfo({
      ...infoSetting,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (infoSetting.nickName && infoSetting.id) {
      localStorage.setItem("userInfo", JSON.stringify(infoSetting));
      setModalIsOpen(false);
      setNowUser(JSON.stringify(infoSetting));
      MySwal.fire({
        icon: 'success',
        text: 'Welcome to Mood-Tracker!',
        timer: 1500
      })
    } else {
      MySwal.fire({
        icon: 'error',
        text: '닉네임과 아이디를 입력해주세요!',
        confirmButtonText: '확인',

      })
      
    }
  };

  return (
    <Main>
      <Modal isOpen={modalIsOpen} style={ModalStyle} ariaHideApp={false}>
        {
          <ModalInner>
            <ModalTitle>
              <BigFont>MoodTracker</BigFont>
              <SmallFont>
                서비스 이용을 위해 간단한 정보를 입력해주세요.
              </SmallFont>
            </ModalTitle>

            <ModalContent>
              <ModalInput>
                <p> NICKNAME</p>
                <input
                  placeholder="닉네임을 입력해주세요."
                  name="nickName"
                  onChange={userInfoChange}
                ></input>
              </ModalInput>
              <ModalInput>
                <p>ID</p>
                <input
                  placeholder="아이디를 입력해주세요."
                  name="id"
                  onChange={userInfoChange}
                ></input>
              </ModalInput>
            </ModalContent>

            <ModalFooter>
              <button onClick={() => onSubmit()}> 완료</button>
            </ModalFooter>
          </ModalInner>
        }
      </Modal>
      <BrowserRouter>
        <Sidebar userInfo={userInfo}></Sidebar>
        <Routes>
          <Route element={<Daily />} path="/" exact />
          <Route element={<Monthly />} path="/monthly" />
        </Routes>
      </BrowserRouter>
    </Main>
  );
}

// function InfoSave(props){
//   return (

//   );
// }
