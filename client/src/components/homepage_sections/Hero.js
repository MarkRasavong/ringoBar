import MenuBookIcon from '@mui/icons-material/MenuBook';
import PhoneInTalk from '@mui/icons-material/PhoneInTalk';
import GoogleIcon from '@mui/icons-material/Google';
import { Button, Grid, Typography, Box, IconButton } from '@mui/material';
import { Fragment } from 'react';
import styles from '../../../styles/Hero.module.css';
import BusinessHours from '../BusinessHours';
import Facebook from '@mui/icons-material/Facebook';
import Instagram from '@mui/icons-material/Instagram';

const socialMedia = [
    {
        key: 'googleRestaurant',
        icon: <GoogleIcon color='primary' />,
        link: 'tel:+34-624-41-45-18'
    },
    {
        key: 'facebookSocialMediaLink',
        icon: <Facebook color='primary' />,
        link: 'https://facebook.com/'
    },
    {
        key: 'instagramSocialMediaLink',
        icon: <Instagram color='primary' />,
        link: 'https://www.instagram.com/ringobar/'
    }
];

const Hero = () => {

    return (
        <Fragment>
            <Grid container className={styles.hero_div} justifyContent="center">
                <img src='/pizza-hero.png' alt='image of a pizza on the hero section of the main page' className={styles.heroPic} />
                <Grid item xs={12} md={6}>
                    <BusinessHours />
                    <Grid container spacing={0.5}>
                        <Grid item xs={12} md={6}>
                            <Button variant='contained' fullWidth href='tel:+34-624-41-45-18'><PhoneInTalk className={styles.buttonSticker} /> Telefono</Button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Button variant='contained' fullWidth href='https://www.just-eat.es/restaurants-ringo-bar-valencia/menu' target="_blank"><img src='/just-eat-logo.png' alt='Just Eat Logo' className={styles.buttonSticker} /> Just Eat</Button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Button variant='contained' fullWidth href='https://glovoapp.com/es/es/valencia/ringo-bar-valencia/' target="_blank"><img src='/glovo.png' alt='Glovo Logo' className={styles.buttonSticker} /> Glovo</Button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Button variant='contained' fullWidth href='/carta'><MenuBookIcon className={styles.buttonSticker} />ver carta</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid >
            <Grid container className={styles.mobileSocialMediaIcons}>
                <div style={{ display: 'block', justifySelf: 'center' }}>
                    <Typography xs={12} variant='h5' component='div' color='secondary'>¡Síguenos y déjanos un comentario!</Typography>
                </div>
                <div style={{ display: 'block', justifySelf: 'center' }}>
                    {socialMedia.map((media) =>
                        <IconButton key={`${media.key}`} href={media.link} target="_blank">
                            {media.icon}
                        </IconButton>
                    )}
                </div>
            </Grid>
        </Fragment>
    )
}

export default Hero;