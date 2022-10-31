import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CustomButton } from './CustomButton';
import { useHistory } from "react-router-dom";

const theme = createTheme({
    palette: {
        primary: {
            main: '#000',
        },
    },
});

const style = {
    fontSize: '16px',
    fontFamily: 'Poppins',
    fontWeight: '400',
    lineHeight: '150%'
}

export const Navbar = () => {
    const history = useHistory();

    const homeNavigateHandler = () => {
        history.push('/')
    }

    const aboutNavigateHandler = () => {
        history.push('/#about')
    }

    const serviceNavigateHandler = () => {
        history.push('/#services')
    }

    const shopNavigateHandler = () => {
        history.push('/shop')
    }

    const bookingNavigateHandler = () => {
        history.push('/booking')
    }


    return (
        <AppBar position='sticky' color='inherit'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <img src="images/Logo/Black.png" alt="" />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} color='white'>
                    POKEMONAPP
                </Typography>
                <Stack direction='row' spacing={2}>
                    <CustomButton style={style} color='inherit' size='large' onClick={homeNavigateHandler}>Home</CustomButton>
                    <CustomButton style={style} color='inherit' size='large' onClick={aboutNavigateHandler}>About</CustomButton>
                    <CustomButton style={style} color='inherit' size='large' onClick={serviceNavigateHandler}>Services</CustomButton>
                    <CustomButton style={style} color='inherit' size='large' onClick={shopNavigateHandler}>Shop</CustomButton>

                    <ThemeProvider theme={theme}>
                        {CustomButton &&
                            <CustomButton
                                variant='contained'
                                color='primary'
                                size='large'
                                onClick={bookingNavigateHandler}>
                                Booking
                            </CustomButton>}
                    </ThemeProvider>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
