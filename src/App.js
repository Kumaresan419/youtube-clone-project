<<<<<<< HEAD
import React from "react";
import Navbar from "./Navbar";
import Container from "./Container";
import ProfileSettings from "./ProfileSettings";
=======
import React from 'react';
import Navbar from './Navbar.js';
import Container from './Container.js';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Video1 from './Video1.js';

>>>>>>> 0836d2207481ebcefb4f27e2778f9c025ae5c1e7

function App() {
  return (
    <div className="App">
    
      
      <BrowserRouter>
      <Navbar />
<<<<<<< HEAD
      <Container />
      <ProfileSettings />
      {/* Add other components and content */}
=======
      <Video1 />
    <Routes>
   
        <Route path='/' element={<Container /> }/>
        <Route path='video1' element={<Video1/>}/>

        
    </Routes>
    </BrowserRouter>
>>>>>>> 0836d2207481ebcefb4f27e2778f9c025ae5c1e7
    </div>
    
   
  );
}

export default App;
