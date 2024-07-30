import { CssBaseline, ThemeProvider } from "@mui/material";
import { useGlobalStyles } from "./assets/themes/globalStyles";
import { AppProps } from "next/app";
import { theme } from "./assets/themes/theme";
// import { Component } from "react";

function App({ Component, pageProps}: AppProps) {
    useGlobalStyles();
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
export default App