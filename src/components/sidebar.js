import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import SidebarItem from "./sidebarItem.js";
import defaultImage from "../assets/check-pattern.jpeg";
import './style.css';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Container = styled.div`
  display: flex;
  border-right: 1px solid #b5b4b4;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 23%;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Menu = styled.div`
  margin-top: 50px;
  width: 200px;
  display: flex;
  flex-direction: column;
`;

const Profile = styled.div`
  margin-top: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 65%;
`;

const PImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 0.7px solid #a3a3a3;
`;

const Info = styled.div``;

const Name = styled.div`
  font-family: "YdestreetB";
  font-size: 12pt;
`;
const Id = styled.div`
  font-family: "YdestreetL";
  font-size: 8pt;
`;

const Logout = styled.div`
  font-family: "YdestreetL";
  font-size: 10pt;
  margin-bottom: 10%;
  cursor: pointer;
  color:gray;
  text-decoration: underline 1px gray;
`;

/////
export default function Sidebar(props)  {
  const menus = [
    { name: "👋 Daily ", path: "/" },
    { name: "🗓 Monthly ", path: "/monthly" },
  ];

  let userInfo = props.userInfo.length > 0 ? JSON.parse(props.userInfo) : ''
  const MySwal = withReactContent(Swal);
  const logout = () =>{
    MySwal.fire({
      text : `로그아웃시, 현재까지의 기록이 날라가게 됩니다. \n 로그아웃 하시겠습니까?`,
      showCancelButton:true,
      cancelButtonText:'취소',
      cancelButtonColor:'#cccbcb',
      confirmButtonText: '확인',
        confirmButtonColor:'#3b3b3b',
    }).then((result)=>{
      if(result.isConfirmed){
        MySwal.fire({
          text: ' 🥺 로그아웃 되었습니다.',
          timer: 1000,
          position: 'top-end',
          showConfirmButton: false,
     
        }).then(()=>{
          localStorage.clear();
          window.location.reload();
        })
      
      }
    })
   
  }
  
  return (
    <Container>
      <div>
        <Profile>
          <PImage src={defaultImage}></PImage>
          <Info>
            <Name>{userInfo ? userInfo.nickName : 'unknown'}</Name>
            <Id>@ {userInfo ? userInfo.id : '사용자 정보가 없습니다.'}</Id>
          </Info>
        </Profile>
        <Menu>
          {menus.map((menu, index) => {
            return (
              <NavLink className={({ isActive }) => (isActive ? 'menuSelectStyle' : 'menuDefaultStyle')} to={menu.path} key={index}>
                <SidebarItem menu={menu} />
              </NavLink>
            );
          })}
        </Menu>
      </div>

      <Logout onClick={() => logout()}> {userInfo && '( LOGOUT )'}</Logout>
    </Container>
  );
}
