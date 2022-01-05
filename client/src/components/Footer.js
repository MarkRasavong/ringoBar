import { Grid, Typography } from "@mui/material";

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--primary-colour)' }}>
            <Grid container justifyContent='center' sx={{ paddingTop: '20px' }}>
                <Typography variant="h4" color="var(--contrast-text)">RingoBar</Typography>
            </Grid>
        </footer>
    )
}

export default Footer
