import { AppBar, Toolbar, IconButton, Typography, Stack, Button } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CustomButton } from './CustomButton';

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
    return (
        <AppBar position='static' color='inherit'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <img src="images/Logo/Black.png" alt="" />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ flexGrow: 1 }} color='white'>
                    POKEMONAPP
                </Typography>
                <Stack direction='row' spacing={2}>
                    <CustomButton style={style} color='inherit' size='large'>Home</CustomButton>
                    <CustomButton style={style} color='inherit' size='large'>About</CustomButton>
                    <CustomButton style={style} color='inherit' size='large'>Services</CustomButton>
                    <CustomButton style={style} color='inherit' size='large'>Shop</CustomButton>

                    <ThemeProvider theme={theme}>
                        {/* <Button variant="contained" color='primary' size='large'>Booking</Button> */}
                        {CustomButton && <CustomButton variant='contained' color='primary' size='large'>Booking</CustomButton>}
                    </ThemeProvider>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
