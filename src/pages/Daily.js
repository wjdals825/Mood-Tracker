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
  background-color: ${(props) => (props.color ? props.color : "white")};
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

const MoodFace = styled.h2`
  font-size: 16px;
`;

export default function Daily() {
  let today = moment();

  let year = today.format("yyyy");

  const [checkColor, setColor] = useState({ color: "", face: "" });

  const trackingMood = (e) => {
    setColor(e);
    let checkAlready = localStorage.getItem(today.format("yyyy-MM"));
    if (checkAlready) {
      console.log("check",JSON.parse(checkAlready))
      let saveInfo = {...JSON.parse(checkAlready), date: today.format("DD"), color: e.color };
      console.log('s',saveInfo)
      // localStorage.setItem(today.format("yyyy-MM"), JSON.stringify(saveInfo));
    } else {
      let saveInfo = { date: today.format("DD"), color: e.color };
      localStorage.setItem(today.format("yyyy-MM"), JSON.stringify(saveInfo));
    }
  };

  // const saveMood = (info) => {
  //   console.log("info",info)
  //   // 
  // };
  return (
    <Container>
      <Day>
        <Year>
          {year.slice(0, 2)}
          <br />
          {year.slice(2, 4)}
        </Year>
        {/* <input placeholder="?????? ????????? ????????? ??????????????????."></input> */}
        <Year>
          {today.format("MM")}.
          <br />
          {today.format("DD")}
        </Year>
      </Day>
      <Circle>
        <Mood
          data-for="moodCheck"
          data-tip
          data-event="click focus"
          color={checkColor.color}
        >
          {checkColor.face ? (
            <MoodFace>{checkColor.face}</MoodFace>
          ) : (
            <p>???????????? ?????? ????????? ????????? ???????????????!</p>
          )}
        </Mood>
        <ReactTooltip
          id="moodCheck"
          effect="solid"
          offset={{ left: 30 }}
          type="light"
          clickable={true}
          isCapture={true}
        >
          {/* ???????????? */}
          <SelectMood
            onClick={() => trackingMood({ color: "#f4d284", face: "??( ?????????????????????)" })}
          >
            <InnerMood color="#f4d284">??( ?????????????????????)</InnerMood>
          </SelectMood>
          {/* ????????? ????????????~ */}
          <SelectMood
            onClick={() =>
              trackingMood({ color: "#eeafaf", face: "(??? ????????????)??????" })
            }
          >
            <InnerMood color="#eeafaf">(??? ????????????)??????</InnerMood>
          </SelectMood>
          {/* ?????? ????????? */}
          <SelectMood
            onClick={() => trackingMood({ color: "#bae7af", face: "( ?????_????? )" })}
          >
            <InnerMood color="#bae7af">( ?????_????? )</InnerMood>
          </SelectMood>
          {/* ???????????? */}
          <SelectMood
            onClick={() => trackingMood({ color: "#ff7f7f", face: "( ???????????? )" })}
          >
            <InnerMood color="#ff7f7f">( ???????????? )</InnerMood>
          </SelectMood>
          {/* ???????????? */}
          <SelectMood
            onClick={() => trackingMood({ color: "#afc4e7", face: "(?????????)" })}
          >
            <InnerMood color="#afc4e7">(?????????)</InnerMood>
          </SelectMood>
        </ReactTooltip>
      </Circle>
    </Container>
  );
}
