import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body{
  background: #151515;
  -webkit-font-smoothing: antialiased;
}
body, input, button{
  font: 14px Montserrat, sans-serif;
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