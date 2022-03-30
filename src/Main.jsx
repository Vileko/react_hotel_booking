import React from 'react';
import {
    Link,
    Outlet 
  } from "react-router-dom";



const Main = () => {
    return (
        <div>
            <Link to='/'>Вход</Link>
        </div>
    );
};

export default Main;