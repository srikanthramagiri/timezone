import React from "react";
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';

export default function Layout(props) {
    return (
        <React.Fragment>
                    <Link to="/">Timezone </Link>
                    <Link to="/Card">Card Component </Link>
                {props.children}
        </React.Fragment>
        )
}
