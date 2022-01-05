import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        type: 'light',
        primary: {
            main: '#e34033',
        },
        secondary: {
            main: '#315f11',
        },
        error: {
            main: '#f4dd36',
        },
    },
    typography: {
        h1: {
            fontFamily: '"Oleo Script", cursive',
        },
        h2: {
            fontFamily: '"Oleo Script", cursive',
        },
        h3: {
            fontFamily: '"Oleo Script", cursive',
        },
        h4: {
            fontFamily: '"Oleo Script", cursive',
        },
        h5: {
            fontFamily: '"Oleo Script", cursive',
        },
        h6: {
            fontFamily: '"Oleo Script", cursive',
        },
        fontFamily: '"Roboto", sans-serif',
    },
});

export default theme;