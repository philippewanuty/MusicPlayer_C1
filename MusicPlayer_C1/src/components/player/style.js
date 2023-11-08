import styled from 'styled-components';
import {Colors} from '../../theme'

export const Container = styled.div`

    height:  31.125rem;
    width: 16.625rem;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    padding: 3.125rem 2.375rem;
    border-radius: 0.625rem;
    
    background-color: ${Colors.display_background};

    h1 {
        color: white;

    }

    > p {
        color: white;
    }

    img {
        width: 190px;
        height: 190px;
        border-radius: 0.5rem;
        
    }

    div > RiRewindFill {
        height: 29px;
        width: 29px;
    }
  
`;