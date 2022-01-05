import PhoneInTalk from '@mui/icons-material/PhoneInTalk';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Grid, Button, Typography } from '@mui/material';
import styles from '../../../styles/Contactar.module.css';

const Contactar = () => {

    return (
        <Grid container justifyContent='center' className={styles.contactGrid} id='contactar'>
            <Typography variant='h3' component='div' color={'var(--contrast-text)'} style={{ marginBottom: '10px' }}>Contactar</Typography>
            <Grid container justifyContent='center'>
                <a href="https://www.google.com/maps/place/RINGO+BAR/@39.4845162,-0.3890558,17z/data=!3m1!4b1!4m5!3m4!1s0xd604f1cead0fce7:0xdf718751632a7a69!8m2!3d39.4845089!4d-0.3868619" target='_blank'>
                    <img src='/map_locale_01.png' alt='ubicacion de la pizzeria en mapa de formato de imagen' className={styles.mapSize} />
                </a>
                <Grid container justifyContent='center' style={{ marginTop: '20px' }}>
                    <Grid item xs={12} sm={6}>
                        <Typography variant='h5' component='div' style={{ marginBottom: '10px' }} color={'var(--contrast-text)'}>Llamar</Typography>
                        <Button variant='contained' href='tel:+34-624-41-45-18' target='_blank'><PhoneInTalk style={{ marginRight: '10px' }} /> Llamar al 624 41 45 18</Button>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant='h5' component='div' style={{ marginTop: '10px' }} color={'var(--contrast-text)'}>Dirección</Typography>
                        <Button variant='contained' href='https://www.google.com/maps/dir//RINGO+BAR/@39.4844952,-0.4569071,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0xd604f1cead0fce7:0xdf718751632a7a69!2m2!1d-0.3868619!2d39.4845089' target='_blank'> <DirectionsIcon style={{ marginRight: '10px' }} /> Cómo Llegar</Button>
                        <Typography variant='body2' component='div' color={'var(--contrast-text)'} style={{ marginTop: '10px' }}>
                            Carrer de Joaquim Ballester, 12 <br />
                            46009 València <br />
                            Valencia <br />
                            España <br />
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Contactar;