import { useFormik } from 'formik';
import * as yup from 'yup';
import {
    TextField,
    Button,
    Box,
    Typography,
    Stack,
    FormControl,
    MenuItem,
    Select,
    SelectChangeEvent,
    Grid
} from '@mui/material';

import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';


const validationSchema = yup.object({
    firstname: yup
        .string()
        .required('First Name is required'),
    lastname: yup
        .string()
        .required('Last Name is required'),
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required')

});

export const Booking = () => {

    const [value, setValue] = React.useState<Dayjs | null>(
        dayjs('2014-08-18T21:11:54'),
    );

    const handleChange = (newValue: Dayjs | null) => {
        setValue(newValue);
    };

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
        },
        enableReinitialize: true,
        validationSchema: validationSchema,
        onSubmit: (values: any) => {
            console.log("Values: ", values);
        },
    });

    return (
        <div>
            <div>
                <div className="booking-form">
                    <h3>Booking details</h3>
                    <Stack spacing={4}>
                        <form onSubmit={formik.handleSubmit}>
                            <Box sx={{ flexGrow: 1 }}>
                                <Stack spacing={2}>
                                    <Select
                                        fullWidth
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        label="Age"
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                    <TextField
                                        fullWidth
                                        id="firstname"
                                        name="firstname"
                                        label="First name"
                                        className="text-field"
                                        value={formik.values.firstname}
                                        onChange={formik.handleChange}
                                        error={formik.touched.firstname && Boolean(formik.errors.firstname)}
                                        helperText={formik.touched.firstname && formik.errors.firstname}
                                    />

                                    <TextField
                                        fullWidth
                                        id="lastname"
                                        name="lastname"
                                        label="Last name"
                                        className="text-field"
                                        value={formik.values.lastname}
                                        onChange={formik.handleChange}
                                        error={formik.touched.lastname && Boolean(formik.errors.lastname)}
                                        helperText={formik.touched.lastname && formik.errors.lastname}
                                    />

                                    <TextField
                                        fullWidth
                                        id="email"
                                        name="email"
                                        label="Email"
                                        className="text-field"
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                    />

                                    <Grid container >
                                        <Grid item xs={6} style={{ padding: "0px 10px 0px 0px" }}>
                                            <FormControl fullWidth>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DesktopDatePicker
                                                        label="Date desktop"
                                                        inputFormat="MM/DD/YYYY"
                                                        value={value}
                                                        onChange={handleChange}
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />
                                                </LocalizationProvider>
                                            </FormControl>
                                        </Grid>

                                        <Grid item xs={6} style={{ padding: "0px 0px 0px 10px" }}>
                                            <FormControl fullWidth>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <TimePicker
                                                        label="Time"
                                                        value={value}
                                                        onChange={handleChange}
                                                        renderInput={(params) => <TextField {...params} />}
                                                    />
                                                </LocalizationProvider>
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Button
                                        color="primary"
                                        variant="contained"
                                        fullWidth
                                        type="submit">
                                        <b>Submit</b>
                                    </Button>
                                </Stack>
                            </Box>
                        </form>
                    </Stack>
                </div>
            </div>
        </div>
    )
}