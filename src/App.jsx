import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import NextPage from './pages/NextPage';
// import Trainers from './components/Templates/Main/Trainers/Trainers';

export default function App() {
  return (
    <div className='App'>
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route index element={<NextPage />} path='/*' />
          </Routes>
        </BrowserRouter>
    </div>
  );
}
