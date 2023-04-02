import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from '../components/Templates/Main/Main';
import NameNextPage from '../components/Templates/Main/ComponentMain/NameNextPage';
import Trainers from '../components/Templates/Main/Trainers/Trainers';
import GridTemplate from './GridTemplate';

export default function NextPage() {
  return (
    <GridTemplate>
      <Routes>
        {/* <Route index element={<Main />} path='/test' /> */}
        <Route path='/' element={<Main />} />

        {/* /edit фиксированный элемент */}
        <Route path='/edit' element={<>Test text edit</>} />

        {/* /:name плавающий элемент */}
        <Route path='/:name' element={<NameNextPage />} />

        {/* /:name плавающий элемент */}
        <Route path='/trainers' element={<Trainers />} />
      </Routes>
      </GridTemplate>
  );
}
