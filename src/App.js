import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { CartProvider } from './context/CartContext';
import NavbarWrapper from './components/NavBarWrapper';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Products from './components/Products';
import Cart from './components/Cart';
import UserProfile from './components/UserProfile';
import KhomasLandingPage from './components/Regions/khomasLandingPage';

function App() {
  return (
    <Router>
      <CartProvider>
        <div>
          <NavbarWrapper />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/LandingPage" element={<LandingPage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/user-profile" element={<UserProfile />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/LandingPage-khomas" element={<KhomasLandingPage />} />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;

// function App() {
//   return (
//     <Router>
//        <CartProvider>
//         <div>
//         <NavBar />
//         <Routes>
//           {/* Update these Route components once the corresponding components are ready} */}
//           {/* <Route path="/" exact element={<LandingPage />} /> */}
//           <Route path="/home" element={<Home />} />
//           <Route path="/profile" element={<UserProfile />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/cart" element={<Cart />} />
//         </Routes>
//       </div>
//       </CartProvider>
//     </Router>
//   );
// }

// export default App;





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
