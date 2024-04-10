import React from "react";
import "./../../assets/css/bootstrap.min.css"
import "./../../assets/css/password-field.css"
import "./../../assets/css/toast.css"
import "./../../assets/css/loading-indicator.css"
import "./../../assets/css/app.css"
import "./../../assets/js/bootstrap.bundle.min"
import "./../../assets/js/fontawesome-6.1.1.all.min"

function AppBootstrap(props: any) {
    return (<>{props.children}</>)
}

export default AppBootstrap;