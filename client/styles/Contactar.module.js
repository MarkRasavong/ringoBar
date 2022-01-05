import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
    contactGrid: {
        backgroundColor: 'var(--primary-colour)',
        padding: 'var(--section_padding)'
    },
    imageSizeContactar: {
        [theme.breakpoints.between('xs', 'sm')]: {
            height: '22vh'
        },
        [theme.breakpoints.between('sm', 'md')]: {
            height: '21 vh'
        },
        [theme.breakpoints.between('md', 'lg')]: {
            height: '68vh'
        }
    }
})
);