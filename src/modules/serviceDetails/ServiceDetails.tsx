import "../../App.css";
import "../../components/HeroSection.css";
import { services } from "../../utils/Constants";
import { Grid, Typography, Stack } from '@mui/material'

const ServiceDetails = () => {
  return (
    <Stack className='services-details'>
      <Grid container>
        <Grid item xs={24} sm={24} md={24} lg={6} xl={6} >
          <Stack style={{ height: '74%' }} className="left-side-area">
            <Stack className="title_1">
              <Typography
                variant="h1"
                style={{ color: 'black', lineHeight: '80px' }}>
                  Haircut
              </Typography>
              
              <Typography
                variant="subtitle2"
                fontFamily='Poppins'
                fontWeight='400'
                lineHeight='150%'
                style={{ color: "black" }}>
                  {services[0]?.description}
              </Typography>

            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default ServiceDetails