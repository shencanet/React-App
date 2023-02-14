import React from "react";
import ReactDom from "react-dom/client";
import './index.css';

const rootElement = document.getElementById('root')


const root = ReactDom.createRoot(document.getElementById('root'));
root.render(<h1>HELLO world</h1>)