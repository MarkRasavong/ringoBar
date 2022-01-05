import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Grid, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const TarjetaCarta = ({ data, title }) => {
    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                id={`${title}_carta`}
            >
                <Typography variant='h4' color='secondary'>{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {
                    data.map((item) => (
                        <AccordionDetails key={item.name}>
                            <Card>
                                <CardContent>
                                    <Grid container justifyContent='space-between'><Typography color='secondary' variant='h6' component='span'>{item.name}</Typography> <Typography color='primary' variant='h6' component='span'>{item.price}€</Typography></Grid>
                                    {item.description && <Typography variant='body1' component='span'>{item.description}</Typography>}
                                </CardContent>
                            </Card>
                        </AccordionDetails>
                    )
                    )}
            </AccordionDetails>
        </Accordion>
    )
}

export default TarjetaCarta;
