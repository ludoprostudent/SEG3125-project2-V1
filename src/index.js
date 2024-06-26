import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { CartProvider } from './CartContext';

import { render } from "react-dom";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <CartProvider>
//       <App />
//     </CartProvider>
//   </React.StrictMode>
// );

render(<CartProvider><App /></CartProvider>, document.getElementById("root"));
