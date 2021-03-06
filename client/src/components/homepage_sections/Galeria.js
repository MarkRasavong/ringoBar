import { Grid, Typography, Button } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import styles from '../../../styles/Galeria.module.css';
import MainpagePhotoCollage from '../MainpagePhotoCollage';

const Galeria = () => (
    <Grid id='galeria' container justifyContent='center' className={styles.galeria_div}>
        <Typography variant='h3' color='var(--secondary-colour)'>Galeria</Typography>
        <Grid container justifyContent='center'>
            <MainpagePhotoCollage />
        </Grid>
        <div>
            <Button variant='contained' className={styles.galeria_btn} href='https://www.instagram.com/ringobar_/' target="_blank"> <InstagramIcon className={styles.btn_icon} /> Ver mas en Instagram</Button>
            <Button variant='contained' className={styles.galeria_btn} href='https://www.google.com/maps/uv?pb=!1s0xd604f1cead0fce7%3A0xdf718751632a7a69!3m1!7e131!4s!5sRINGO%20BAR!15sCgIgAQ&hl=es&imagekey=!1e10!2sAF1QipMVfv7JW9-cv8i_plVQFalfU0y5bIoqCRiyTNIe' target="_blank"> <GoogleIcon className={styles.btn_icon} /> Ver mas en Google</Button>
        </div>
    </Grid>
);
export default Galeria;
