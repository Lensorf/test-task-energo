import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Data from './components/Data/Data';

function App() {
  const [componentSize, setComponentSize] = useState('small');

  return (
    <ConfigProvider componentSize={componentSize}>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </div>
    </ConfigProvider>
  );
}

export default App;
