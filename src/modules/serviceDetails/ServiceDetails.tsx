import "../../App.css";
import "../../components/HeroSection.css";
import { services } from "../../utils/Constants";
import { Grid, Typography, Stack } from '@mui/material'
import { CustomButton } from "../../components/CustomButton";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useParams, useHistory } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
  },
});

const style1 = {
  padding: '8px 20px',
  outline: 'none',
  cursor: 'pointer',
  border: '1px solid var(--primary)',
  borderRadius: '5px',
  fontFamily: 'Poppins',
  fontWeight: '400',
  fontSize: '14px',
  textTransform: 'capitalize',
  width: '75%'
}

const ServiceDetails = () => {

  const history = useHistory();

  const params: any = useParams()
  console.log("params: ", params);

  const makeReserve = () => {
    history.push('/booking')
  }

  const serviceID = +params?.serviceTypeId || 1
  console.log("serviceId: ", serviceID);
  console.log("services: ", services);

  return (
    <Stack className='services-details'>
      <Grid container>
        <Grid item xs={24} sm={24} md={24} lg={6} xl={6} >
          <Stack style={{ height: '74%' }} className="left-side-area">
            <Stack className="title_1">
              <Typography
                variant="h1"
                style={{ color: 'black', lineHeight: '80px' }}>
                {services[serviceID - 1]?.name}
              </Typography>

              <Stack spacing={4}>
                <Typography
                  variant="subtitle2"
                  fontFamily='Poppins'
                  fontWeight='400'
                  lineHeight='150%'
                  style={{ color: "black" }}
                >
                  {services[serviceID - 1]?.description} 
                </Typography>

                <ThemeProvider theme={theme}>
                  <CustomButton
                    variant='contained'
                    size='large'
                    style={style1}
                    onClick={makeReserve}
                  >
                    Make a Reservation
                  </CustomButton>
                </ThemeProvider>
              </Stack>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default ServiceDetails