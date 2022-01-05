import { Grid, Typography } from '@mui/material';
import styles from '../styles/Carta.module.css';
import TarjetaCarta from '../src/components/carta/TarjetaCarta';
import { pizzas, desayunos, almuerzos, cervezas, bebidasExtras, vinos, cocteles, bocadillos, dolci, pastasApretivosYmas, promos } from '../src/components/carta/cartaData';

const carta = () => {

    return (
        <div className={styles.menuDiv}>
            <Grid container justifyContent="center">
                <Typography variant='h1' component='div' color='primary' className={styles.titleSize}>Ringo Carta</Typography>
            </Grid>
            <Grid container justifyContent="center" marginBottom={'20px'}>
                <div>
                    <TarjetaCarta title='Pizzas' data={pizzas} />
                    <TarjetaCarta title='Desayunos (hasta las 12:00)' data={desayunos} />
                    <TarjetaCarta title='Almuerzos (hasta las 16:00)' data={almuerzos} />
                    <TarjetaCarta title='Bocadillos' data={bocadillos} />
                    <TarjetaCarta title='Cervezas' data={cervezas} />
                    <TarjetaCarta title='Bebidas' data={bebidasExtras} />
                    <TarjetaCarta title='Vinos' data={vinos} />
                    <TarjetaCarta title='Cocteles' data={cocteles} />
                    <TarjetaCarta title='Postres' data={dolci} />
                    <TarjetaCarta title='Pastas, apretivos, y mas' data={pastasApretivosYmas} />
                    <TarjetaCarta title='Promociones' data={promos} />
                </div>
            </Grid>
        </div>
    );
};

export default carta;
