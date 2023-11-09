import { createGlobalStyle } from 'styled-components';
import {theme} from './theme'

 export const GlobalStyle = createGlobalStyle`



*{
 font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;


}

  body {
    background-color: ${theme.background} ;
   

  }



`;











