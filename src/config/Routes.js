import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../component/Login";
import Form from "../component/Register";


function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route
          path='/Form'
            render={(props) => <Form {...props} isAuthed={true} />}/>
      </Switch>
    </Router>
  );
}
export default Routing;
