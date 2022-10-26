import React from "react";
import { Navbar } from "../components/Navbar";

const DefaultLayout = (Children: any) => {
  return class extends React.Component {
    constructor(props: any) {
      super(props);
      this.state = {};
    }

    render() {
      const { ...props } = this.props;
      return (
        <div className="container-fluid h-100">
          <div>
            <Navbar />
            <div className="col-12 h-100">
              <Children {...props} />
            </div>
          </div>
        </div>
      );
    }
  };
};

export default DefaultLayout;