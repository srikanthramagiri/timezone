import React from "react";
import { Link } from "react-router-dom";

export default function Layout(props) {
    return (
        <React.Fragment>
                    <Link to="/">Timezone </Link>
                    <Link to="/Card">Card Component </Link>
                {props.children}
        </React.Fragment>
        )
}
