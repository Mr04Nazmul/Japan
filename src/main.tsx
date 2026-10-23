import React from 'react';
import {createRoot} from 'react-dom/client';
import {TabiJapanTravelMap} from './components/generated/TabiJapanTravelMap';
import './reset.css';
createRoot(document.getElementById('root')!).render(<TabiJapanTravelMap/>);
