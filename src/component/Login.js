import React, {Component} from "react";
import { Link } from "react-router-dom"

class Login extends Component {
    render() {
        return(
            <div> 
                <p>Hello World</p>
                <Link to="/form">Form</Link>

            </div>
        )
    }
}

export default Login;
