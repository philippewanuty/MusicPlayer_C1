import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainPage } from './pages/main_page/index.jsx';
import GlobalStyle from './styles/globalstyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme.js';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<MainPage />
		</ThemeProvider>
	</React.StrictMode>
);
