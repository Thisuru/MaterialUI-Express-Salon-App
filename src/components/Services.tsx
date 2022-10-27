import "./Services.css";
import CardItem from "./CardItem";
import { Stack } from '@mui/material'

function Services() {
  return (
    <Stack className="services-area" id="services">
      <h1>Services</h1>
      <Stack className="services-area__container">
        <Stack className="services-area__wrapper">
          <ul className="services-area__items">
            <CardItem
              src="images/img_svs_1.svg"
              title="Haircut"
              text="Lorem ipsum dolor sit amet, conse adipiscing incididunt ut Haircut."
              label="Haircut"
              path="/serviceDetails/1"
            />
            <CardItem
              src="images/img_svs_2.svg"
              title="Hair Styling"
              text="Lorem ipsum dolor sit amet, conse adipiscing incididunt ut Hair Styling."
              label="Styling"
              path="/serviceDetails/2"
            />
            <CardItem
              src="images/img_svs_3.svg"
              title="Makeup"
              text="Lorem ipsum dolor sit amet, conse adipiscing incididunt ut Makeup."
              label="Makeup"
              path="/serviceDetails/3"
            />
          </ul>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Services;
