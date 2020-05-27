import { createGlobalStyle } from 'styled-components';

import background from '../assets/img/worldmap_background.svg';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body{
  background: #1e1e1e url(${background}) no-repeat;
  background-size: 100% auto;
  background-attachment: fixed;
  -webkit-font-smoothing: antialiased;

  @media(max-width: 768px){
    background: #151515;
  }
}
body, input, button{
  font: 16px Montserrat, sans-serif;
}
h1{
  color: #fff;
}
#root {
  margin: 0;
  width: 100%;
  position: absolute;
  min-height: 100%;
}
button{
  cursor: pointer;
}
`;