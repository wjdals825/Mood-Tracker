import React, { useState } from "react";
import styled from "styled-components";
import moment from "moment";
import "moment/locale/ko";
import ReactTooltip from "react-tooltip";
import "./pages.css";

const Container = styled.div`
  background-color: #f0f0f0;
  height: 100vh - 1%;
  width: 67%;
  padding: 1% 5% 0% 5%;
`;

const Day = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Year = styled.div`
  font-family: "YdestreetL";
  font-size: 80px;
  cursor: default;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  cursor: default;
`;

const Mood = styled.div`
  width: 580px;
  height: 560px;
  border: 1px dashed black;
  border-radius: 50%;
  background-color: ${(props) => props.color ? props.color : 'white'};
  cursor: pointer;
  text-align: center;
  line-height: 540px;
  p {
    font-family: "YUniverse-B";
    font-size: 16px;
  }
`;

const SelectMood = styled.div`
  display: flex;

  margin-bottom: 10%;
`;

const InnerMood = styled.div`
  font-size: 14px;
  font-weight: 600;
  border-radius: 50%;
  border: 1px dotted #000;
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.color};
  color: #000;
  cursor: pointer;
`;

export default function Daily() {
  let today = moment();

  let year = today.format("yyyy");

  const [checkColor, setColor] = useState("");

  const trackingMood = (e) => {
    setColor(e);
  };
  
  return (
    <Container>
      <Day>
        <Year>
          {year.slice(0, 2)}
          <br />
          {year.slice(2, 4)}
        </Year>
        {/* <input placeholder="오늘 하루를 한줄로 표현해보세요."></input> */}
        <Year>
          {today.format("MM")}.
          <br />
          {today.format("DD")}
        </Year>
      </Day>
      <Circle>
        <Mood data-for="moodCheck" data-tip data-event="click focus" color={checkColor}>
          {checkColor || <p>클릭하여 오늘 하루를 색으로 채워보세요!</p>}
        </Mood>
        <ReactTooltip
          id="moodCheck"
          effect="solid"
          offset={{ left: 30 }}
          type="light"
          clickable={true}
          isCapture={true}
        >
          {/* 행복해요 */}
          <SelectMood onClick={() => trackingMood("#f4d284")}>
            <InnerMood color="#f4d284">٩( ˃̶͈̀ᗨ˂̶͈́۶)</InnerMood>
          </SelectMood>
          {/* 열정이 불타올라~ */}
          <SelectMood onClick={() => trackingMood("#eeafaf")}>
            <InnerMood color="#eeafaf">(ง •̀ω•́)ง✧</InnerMood>
          </SelectMood>
          {/* 그냥 그래요 */}
          <SelectMood onClick={() => trackingMood("#bae7af")}>
            <InnerMood color="#bae7af">( •̅_•̅ )</InnerMood>
          </SelectMood>
          {/* 화났어요 */}
          <SelectMood onClick={() => trackingMood("#ff7f7f")}>
            <InnerMood color="#ff7f7f">( ｰ̀εｰ́ )</InnerMood>
          </SelectMood>
          {/* 우울해요 */}
          <SelectMood onClick={() => trackingMood("#afc4e7")}>
            <InnerMood color="#afc4e7">(ಥ﹏ಥ)</InnerMood>
          </SelectMood>
        </ReactTooltip>
      </Circle>
    </Container>
  );
}
