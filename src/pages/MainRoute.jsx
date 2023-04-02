import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './MainPage/MainPage';
import Trainings from './Trainings/Trainings';
import SportPage from './SportPage/SportPage';
import Trainers from './Trainers/Trainers';
import NotFound from './NotFound';

export default function MainRoute() {
  return (
    <Main>
      <Routes>
        <Route path='/' element={<Trainings />} />
        {/* /edit фиксированный элемент */}
        <Route path='/trainings' element={<Trainings />} />
        <Route path='/trainers' element={<Trainers />} />
        <Route path='*' element={<NotFound />} />
        {/* /:name плавающий элемент */}
        <Route path='/trainings/:name' element={<SportPage />} />
      </Routes>
    </Main>
  );
}
