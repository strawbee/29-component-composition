import React from 'react';
import ReactDom from 'react-dom';
import App from './component/app/app';
import './styles/main.scss';

const container = document.createElement('div');
document.body.appendChild(container);
ReactDom.render(<App />, container);