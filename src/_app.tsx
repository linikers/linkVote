import { CssBaseline, ThemeProvider } from "@mui/material";
// import useGlobalStyles from "./assets/themes/globalStyles.ts";
import { AppProps } from "next/app";
import { theme } from "./assets/themes/theme";

function _app({ Component, pageProps}: AppProps) {
    // useGlobalStyles();
    return(
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}
export default _app