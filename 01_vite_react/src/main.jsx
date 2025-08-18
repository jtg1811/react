import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const reactElement = React.createElement(
//     'a',
//     {href:'https://google.com',target:'_blank'},
//     'click to visit'
//   )
const anotherElement = (
  <a href='https://google.com' target='_blank'>visit</a>
)
ReactDOM.createRoot(document.getElementById('root')).
render(
  <>
    <App/>
    {anotherElement}
  </>
)