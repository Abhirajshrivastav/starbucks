import React from 'react';
import './App.css';
import { BrowserRouter , Router, Routes, Route } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
import {Footer} from './components/footer/Footer';
import Header from './components/header/Header';
import HomeScreen from './screens/home/HomeScreen';



function App() {
  return (
    <div className='app'>
    <BrowserRouter >
    <Header />
    <Routes>
        <Route path="/" element={<HomeScreen />} />
    </Routes>
    <Fade>
    <Footer />
    </Fade>
</BrowserRouter>
</div>
  );
}

export default App;