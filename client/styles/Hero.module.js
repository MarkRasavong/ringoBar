import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
    hero_div: {
        padding: 'var(--section_padding)',
    },
    heroPic: {
        height: '350px',
        [theme.breakpoints.between('xs', 'sm')]: {
            height: '25vh'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height: '50vh'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            height: '52vh'
        }
    },
    buttonSticker: {
        height: '40px',
        margin: '2px'
    }
}))