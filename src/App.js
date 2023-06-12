import React from 'react';
// import ReactDOM from 'react-dom/client';

// import Navbar from "./components/navbar";
import NavbarTuition from "./components/NavbarTuition";
import CarouselFadeExample from "./components/CarouselComponents";

// import Carousel from 'react-bootstrap/Carousel';


import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <NavbarTuition />
        <CarouselFadeExample/>

        
        {/* Other components or content */}
      </div>
    );
  }
}

export default App;