import React, {Component} from "react";
import { Link } from "react-router-dom"


class Form extends Component {
  render() {
    return (
      <div>
        <p>Hello from form</p>
        <br/>
        <Link to="/">Login</Link>
      </div>
    )
  }
}

export default Form;