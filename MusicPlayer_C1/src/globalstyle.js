import { createGlobalStyle } from 'styled-components';
import {Colors} from './theme'

 export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${Colors.background} ;
  }

`;











