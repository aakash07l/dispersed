import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { createContext, useMemo, useState } from "react";

export const MUIContext = createContext({ toggleColorMode: () => { } });

export default function MUIContextProvider({ children }) {
    const [mode, setMode] = useState('light');
    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
            },
        }),
        [],
    );
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode],
    );

    return (
        <MUIContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </MUIContext.Provider>


    )
}