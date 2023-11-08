import { createGlobalStyle } from 'styled-components';
import {Colors} from './theme'

 export const GlobalStyle = createGlobalStyle`

  body {
    background-color: ${Colors.background} ;
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`;











