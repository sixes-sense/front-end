import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* 다른 경로와 컴포넌트를 추가 */}
      </Routes>
    </div>
  );
}

export default App;
