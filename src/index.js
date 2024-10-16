// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Users from './adding';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <React.StrictMode>
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<App />} />
//                 <Route path="/users" element={<Users />} />
//                 {/* Add more routes for edit if needed */}
//             </Routes>
//         </BrowserRouter>
//     </React.StrictMode>
// );
//rafce

import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

<App/>

  </React.StrictMode>
);