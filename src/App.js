import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";
import MenuEntry from "./MenuEntry";
import HotelSelection from './component/HotelSelection';
import './style/style.css'

function App() {

  return (
    <div className="main">
      <Routes>
        <Route path="/" element={<HotelSelection/>}/>
        <Route path="/s" element={<MenuEntry/>}/>
      </Routes>
    </div>
  );
}

export default App;
