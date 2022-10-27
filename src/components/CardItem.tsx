import { Link } from "react-router-dom";
import { CustomButton } from "./CustomButton";
import { Stack, createTheme, ThemeProvider, Typography } from '@mui/material'

const theme = createTheme({
    palette: {
        primary: {
            main: '#f6f5f2',
        },
    },
});


const style = {
    background: '#f6f5f2',
    color: '#b99a5f',
    borderRadius: '5px',
    border: '1px solid transparent',
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '150%',
}

function CardItem(props: any) {
    return (
        <>
            <li className="services-area__item">
                <Link className="services-area__item__link" to={props.path}>
                    <figure className="services-area__item__pic-wrap" data-category={props.label}>
                        <img className="services-area__item__img" alt="Travel Image" src={props.src} />
                    </figure>
                    <Stack spacing={2} className="services-area__item__info">
                        <Typography style={{ fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '500', fontSize: '20px', lineHeight: '99%', letterSpacing: '-0.03em', color: '#000000' }} variant="h5">
                            {props.title}
                        </Typography>
                        <Typography style={{ fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '400', fontSize: '14px', lineHeight: '150%', color: '#000000' }} variant="body2">
                            {props.text}
                        </Typography>

                        <ThemeProvider theme={theme}>
                            <CustomButton
                                style={style}
                                onClick={() => console.log("clicked")}>
                                MAKE A RESERVATION
                            </CustomButton>
                        </ThemeProvider>
                    </Stack>
                </Link>
            </li>
        </>
    );
}

export default CardItem;
