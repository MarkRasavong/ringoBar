import { Box, Grid, Typography } from '@mui/material';
import { Fragment } from 'react';
import styles from '../../../styles/Horarios.module.css';

const defaultHours = [
    { day: 'Lunes', hora: '10:30 - 23:00' },
    { day: 'Martes', hora: 'Cerrado' },
    { day: 'Miércoles', hora: '18:00 - 23:00' },
    { day: 'Jueves', hora: '10:30 - 23:00' },
    { day: 'Viernes', hora: '10:30 - 23:00' },
    { day: 'Sábado', hora: '10:30 - 23:00' },
    { day: 'Domingo', hora: '10:30 - 23:00' }
]

const Horarios = () => (
    <Grid container className={styles.horas_div} id='horarios' justifyContent='center'>
        <Grid item xs={12}>
            <Typography variant='h3' component='div' color={'var(--contrast-text)'}>Horarios</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
            <Typography variant='h5' component='div' color={'var(--contrast-text)'}>Local</Typography>
            <Grid container>
                {
                    defaultHours.map((day) => (
                        <Fragment key={`locale_${day.day}`}>
                            <Grid item xs={6}>
                                <Typography variant='body2' color={'var(--contrast-text)'}>{day.day}</Typography>
                            </Grid>
                            <Grid>
                                <Typography variant='body2' color={'var(--contrast-text)'}>{day.hora} </Typography>
                            </Grid>
                        </Fragment>
                    ))
                }
            </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
            <Typography variant='h5' component='div' color='var(--contrast-text)'>Cocina</Typography>
            <Grid container>
                {
                    defaultHours.map((day) => (
                        <Fragment key={`cocina_${day.day}`}>
                            <Grid item xs={6}>
                                <Typography variant='body2' color={'var(--contrast-text)'}>{day.day}</Typography>
                            </Grid>
                            <Grid>
                                <Typography variant='body2' color={'var(--contrast-text)'}>{day.hora} </Typography>
                            </Grid>
                        </Fragment>
                    ))
                }
            </Grid>
        </Grid>
    </Grid>
);

export default Horarios;
