import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { useGlobalStyles } from './assets/themes/globalStyles.ts'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './assets/themes/theme.ts';
// import './index.css'

export function Main() {
  useGlobalStyles();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <App />
      </CssBaseline>
    </ThemeProvider>
  )
}
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
