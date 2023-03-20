import React from 'react';
import ReactDOM from 'react-dom/client';

import FlipReciever from "./FlipReciever.jsx";

console.log('OPACHA');

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <div>
     <FlipReciever />
     <div>TEST</div>
  </div>
);


