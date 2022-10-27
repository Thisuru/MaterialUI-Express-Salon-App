import React from "react";
import "../App.css";
import { Navbar } from "../components/Navbar";
import { Grid } from '@mui/material'

const DetailLayout = (Children: any) => {
    return class extends React.Component {
        constructor(props: any) {
            super(props);
            this.state = {};
        }

        render() {
            const { ...props } = this.props;

            return (
                <div>
                    <div>
                        <Navbar />
                        <div className="content-area">
                            <Grid container>
                                <Grid item xs={6} >
                                    <Children {...props} />
                                </Grid>
                                <Grid item xs={6} >
                                    <div className="side-img"></div>
                                    <div className="bottom-color-area"></div>
                                </Grid>
                            </Grid>
                        </div>
                    </div>
                </div>
            );
        }
    };
};

export default DetailLayout;
