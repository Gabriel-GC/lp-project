import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
* {
margin: 0;
padding: 0;
}

html {
  font-size:62.5%;
}
body{
  font-size: 1.6rem;
  font-family: 'Open Sans', sans-serif;
}
h1 {
  font-family: 'Montserrat', sans-serif;
}
`;
