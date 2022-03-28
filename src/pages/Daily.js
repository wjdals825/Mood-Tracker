import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #f0f0f0;
  height: 100vh - 1%;
  width: 67%;
padding:  1% 5% 0% 5%;

`;

const Date = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Year = styled.div`
  font-family: "YdestreetL";
  font-size: 80px;
`;


const Circle = styled.div`
display: flex;
justify-content: center;
height: 100%;
`;


const Mood = styled.div`
    width: 580px;
    height: 560px;
border: 1px dotted black;
border-radius: 50%;
background-color: white;
`
export default function Daily() {
  return (
    <Container>
      <Date>
        <Year>
          20
          <br />
          22
        </Year>
        <Year>03.</Year>
      </Date>
        <Circle>
            <Mood></Mood>
        </Circle>
    </Container>
    //  <div className="container">
    //      2022
    //      </div>
  );
}
