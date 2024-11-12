import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    pastelPink: '#ffd1dc',
    lightGray: '#f5f5f5',
    darkText: '#333',
    accentColor: '#ff7096',
  },
  font: 'Arial, sans-serif',
};

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: ${(props) => props.theme.font};
  }

  body {
    background-color: ${(props) => props.theme.colors.lightGray};
    color: ${(props) => props.theme.colors.darkText};
  }
`;
