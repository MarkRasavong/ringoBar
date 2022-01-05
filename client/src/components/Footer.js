import { Grid, Typography } from "@mui/material";
import styles from '../../styles/Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Grid container justifyContent='center' sx={{ paddingTop: '20px' }}>
                <Typography variant="h4" color="var(--contrast-text)">RingoBar</Typography>
            </Grid>
        </footer>
    )
}

export default Footer;