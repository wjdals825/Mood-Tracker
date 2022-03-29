import React, { useState } from "react";
import styled from "styled-components";
import moment from 'moment';
import 'moment/locale/ko';

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
  background-color: white;
  cursor: pointer;
  text-align: center;
    line-height: 560px;
  p{
    font-family: 'YUniverse-B';
    font-size: 16px;
  }
`;

export default function Daily() {
  let today = moment();

  let year = today.format('yyyy')

  return (
    <Container>
      <Day>
        <Year>
          {year.slice(0, 2)}
          <br />
          {year.slice(2,4)}
        </Year>
        <Year>
         {today.format('MM')}.
          <br />
          {today.format('DD')}
        </Year>
      </Day>
      <Circle>
        <Mood onClick={trackingMood}> <p>클릭하여 오늘 하루를 색으로 채워보세요!</p></Mood>
      </Circle>
    </Container>
  );
}

function trackingMood() {
  return console.log("hihihi")
}
