import React, { useState } from "react";
import styled from "styled-components";

function Boxlog() {
  const Box = styled.div`
    width: 35%;
    height: 60%;
    background-color: blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const Perfil = styled.input`
    width: 250px;
    height: 250px;
    background-color: black;
  `;

  const Nome = styled.input`
    width: 200px;
    height: 25px;
    background-color: white;
  `;

  const [usuario, setUsuario] = useState();

  return (
    <Box>
      <Perfil src={`https://github.com/${usuario}.png`} />
      <Nome
        type={"text"}
        onChange={(event) => {
          setUsuario(event.target.value);
        }}
      />
    </Box>
  );
}

export default Boxlog;
