import { Box, Typography } from '@mui/material';
import React, { Fragment } from 'react'
import styles from '../../styles/Hero.module.css';


let currentDay = new Date().toLocaleString('es-es', { weekday: 'long' }).toString();

console.log(currentDay);

const IntroTemplete = ({ status, day, timeTableStart, timeTableEnd, descanso }) => {
    return (
        <Box style={{ marginBottom: '15px' }}>
            <Typography className={styles.mobileFontSize} variant='h4' color='primary' component='div'>{`Hoy Los ${day}, estamos ${status}`}</Typography>
            {!descanso && <Fragment>
                <Typography className={styles.mobileFontSize} variant='h4' color='primary' component='div'>{`a partir de las ${timeTableStart} a ${timeTableEnd}`}</Typography>
                <Typography className={styles.mobileFontSizeSub} variant='h6' color='secondary' component='div'>Pedir:</Typography>
            </Fragment>
            }
        </Box>
    )
}

const BusinessHours = () => {
    switch (currentDay) {
        case 'lunes':
            return <IntroTemplete status='abierto' day='Lunes' timeTableStart='10:30h' timeTableEnd='23h' descanso={false} />
        case 'martes':
            return <IntroTemplete status='cerrado.' day='Martes' descanso={true} />
        case 'miércoles':
            return <IntroTemplete status='abierto' day='Miércoles' timeTableStart='16h' timeTableEnd='23h' descanso={false} />
        case 'jueves':
            return <IntroTemplete status='abierto' day='Jueves' timeTableStart='10:30h' timeTableEnd='23h' descanso={false} />
        case 'viernes':
            return <IntroTemplete status='abierto' day='Viernes' timeTableStart='10:30h' timeTableEnd='23h' descanso={false} />
        case 'sábado':
            return <IntroTemplete status='abierto' day='Sábados' timeTableStart='10:30h' timeTableEnd='23h' descanso={false} />
        case 'domingo':
            return <IntroTemplete status='abierto' day='Domingos' timeTableStart='10:30h' timeTableEnd='23h' descanso={false} />
        default:
            return <Typography variant='h2' color='primary' component='div'>Benvindos a Ringo Bar!</Typography>
    }
}

export default BusinessHours
