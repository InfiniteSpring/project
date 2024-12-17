import { useState, useEffect } from 'react';
import HeaderFooterComponent from './components/HeaderFooterComponent/HeaderFooterComponent';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  if (window.innerWidth < 1440) {
    return (
      <div className="only-computer-error-container">
        <div className="only-computer-error">
        This site is designed for use on laptops and desktops (devices with a screen width of at least 1440 pixels)
        </div>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderFooterComponent />}>
          {/* <Route index element={<div>-</div>} /> */}
          <Route path="about" element={<div>about</div>} />
          <Route path="services" element={<div>services</div>} />
          <Route path="technologies" element={<div>technologies</div>} />
          <Route path="industries" element={<div>industries</div>} />
          <Route path="portfolio" element={<div>portfolio</div>} />
          <Route path="contact" element={<div>contact</div>} />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;


// import FooterComponent from './components/FooterComponent/FooterComponent';
// import HeaderComponent from './components/HeaderComponent/HeaderComponent';

// function App() {

//   return (
//     <>
//       <HeaderComponent />
//       <FooterComponent />
//     </>
//   )
// }

// export default App;
