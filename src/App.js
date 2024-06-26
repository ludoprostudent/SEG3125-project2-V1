import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './Home';
import SafetyGuides from './SafetyGuides';
import Rental from './Rental';
import Checkout from './Checkout';
import Compare from './Compare';

import 'bootstrap/dist/css/bootstrap.min.css';


import 'bootstrap/dist/css/bootstrap.min.css';
import AboutSectionComponent from './AboutSectionComponent';
import HomeSectionComponent from './HomeSectionComponent';
import Confirmation from './Confirmation';
import ChatComponent from './ChatComponent';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/#how-to-rent" element={<HomeSectionComponent />} />
        </Routes>
        <Routes>
          <Route path="/#about-us" element={<AboutSectionComponent />} />
        </Routes>
        <Routes>
          <Route path="/Rental" element={<Rental />} />
        </Routes>
        <Routes>
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
        <Routes>
          <Route path="/Compare" element={<Compare />} />
        </Routes>
        <Routes>
          <Route path="/safetyguides" element={<SafetyGuides />} />
        </Routes>
        <Routes>
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
        <ChatComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
