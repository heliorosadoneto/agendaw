//import {Link} from 'react-router-dom';
import React from "react";
import styled from "styled-components";
import Boxlog from "../../components/boxLog/box";


export const Login = () => {
  const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: red;
  `;



  return (
    <>
      <Container>
        <Boxlog/>
      </Container>
    </>
  );
};
