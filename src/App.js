import React from 'react';
import Navbar from './Navbar.js';
import Container from './Container.js';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import Video1 from './Video1.js';


function App() {
  return (
    <div className="App">
    
      
      <BrowserRouter>
      <Navbar />
      <Video1 />
    <Routes>
   
        <Route path='/' element={<Container /> }/>
        <Route path='video1' element={<Video1/>}/>

        
    </Routes>
    </BrowserRouter>
    </div>
    
   
  );
}

export default App;

