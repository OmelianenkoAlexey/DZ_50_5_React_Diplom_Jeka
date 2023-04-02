import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import NotFound from './pages/NotFound';
import MainRoute from './pages/MainRoute';

export default function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          {/* <Route path='*' element={<NotFound />} /> */}
          <Route index path='/*' element={<MainRoute />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}
