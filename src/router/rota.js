import {Routes, Route} from 'react-router-dom';
import React from "react";
import { Login } from '../page/log/login';
import { Agenda } from '../page/agenda/agenda';

export const Rotas = () => {
    return (
      <>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/agenda" element={<Agenda/>} />
        </Routes>
      </>
    );
  }