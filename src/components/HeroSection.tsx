import './HeroSection.css'
import { Stack, Grid, createTheme, ThemeProvider, Typography } from '@mui/material'
import "../App.css";
import { CustomButton } from './CustomButton';

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFFFFF',
        },
    },
});

const style = {
    margineTop: '20px',
    border: '1px solid white',
    paddingLeft: '35px',
    paddingRight: '35px',
    fontFamily: 'Poppins',
    fontColor: '#FFFFFF'
}

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <Stack spacing={4}>
                <Grid container>
                    <Grid item xs={24} sm={24} md={24} lg={6} xl={6} >
                        <div className="left-side-area">
                            <div className="title_1">
                                <Stack spacing={2} direction='column'>
                                    <Typography variant='h1' gutterBottom>
                                    Always make room for
                                    </Typography>
                                    <Typography variant='h1' gutterBottom>
                                    beauty in your life
                                    </Typography>
                                    <p>
                                        At Prague we are passionate about making people feel good while looking their best.
                                        Attending advanced education allows us to keep up with the latest trends and provide
                                        each guest with a unique & customizable result. For your convenience, Schedule your
                                        reservation today!
                                    </p>
                                    <ThemeProvider theme={theme}>
                                        <Grid item xl={3}>
                                            <CustomButton style={style} variant='outlined' size='large'>Booking</CustomButton>
                                        </Grid>
                                    </ThemeProvider>
                                </Stack>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Stack>
        </div>
    )
}

export default HeroSection