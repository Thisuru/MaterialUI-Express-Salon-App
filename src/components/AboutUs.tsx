import "./AboutUs.css";
import { Stack, Typography } from '@mui/material'

const AboutUs = () => {
    return (
        <Stack className="about-us-container" id="about">
            <Stack className="about-us-title">About us</Stack>
            <Stack spacing={2}>
                <p className="about-us-para_1">
                    Named “Best Salon” by Main Line Magazine & The Philadelphia Inquirer, Prauge Salon & Style
                    Bar has been committed to “raising the bar ” since opening our doors in 2014. Our mission is
                    simple, give every guest an excellent experience by providing them with a warm, inviting
                    culture & results that surpass expectations. At Privé we are passionate about making people
                    feel good while looking their best. Attending advanced education allows us to keep up with
                    the latest trends and provide each guest with a unique & customizable result. For your
                    convenience, we are open 7 days a week & offers online booking 24 hours a day.
                </p>

                <p className="about-us-para_2"> Schedule your reservation today!</p>

                {/* <Typography sx={{
                    fontStyle: 'Poppins',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '19.8px',
                    textAlign: 'center',
                    color: '#000000',
                    position: 'relative',
                    paddingLeft: '24%',
                    paddingRight: '24%',
                    marginTop: '60px',
                }}
                    gutterBottom
                    variant="subtitle2">
                    Named “Best Salon” by Main Line Magazine & The Philadelphia Inquirer, Prauge Salon & Style
                    Bar has been committed to “raising the bar ” since opening our doors in 2014. Our mission is
                    simple, give every guest an excellent experience by providing them with a warm, inviting
                    culture & results that surpass expectations. At Privé we are passionate about making people
                    feel good while looking their best. Attending advanced education allows us to keep up with
                    the latest trends and provide each guest with a unique & customizable result. For your
                    convenience, we are open 7 days a week & offers online booking 24 hours a day.
                </Typography>

                <Typography sx={{
                    fontWeight: 500,
                    fontSize: '20px',
                    lineHeight: '99%',
                    letterSpacing: '-0.03em',
                    textAlign: 'center',
                    color: '#b99a5f',
                    position: 'relative',
                    paddingLeft: '24%',
                    paddingRight: '24%',
                }}
                    gutterBottom
                    variant="subtitle2">
                        Schedule your reservation today!
                </Typography> */}
            </Stack>
        </Stack>
    )
}

export default AboutUs