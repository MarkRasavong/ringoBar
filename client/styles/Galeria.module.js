import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    galeria_div: {
        padding: 'var(--section_padding)'
    },
    galeria_btn: {
        margin: '10px'
    },
    btn_icon: {
        marginRight: '5px'
    },
    photoCollageDiv: {
        [theme.breakpoints.between('xs', 'sm')]: {
            width: 850,
            height: 500,
            overflowY: 'auto'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            width: 800,
            height: 500,
            overflowY: 'auto'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            width: 800,
            height: 500,
            overflowY: 'auto'
        },
        width: 1000,
        height: 500,
        overflowY: 'auto'

    }
}));
