import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import LoginPage from "./components/loginPage/Page.js";
import MailPage from "./components/mailPage/Page.js";

const App = ({ history }) => {
    return (
        <Switch>
            <Route exact path="/" render={() => <LoginPage history={history} />} />
            <Route path="/mail" render={() => <MailPage history={history} />} />
            <Redirect from="*" to="/" />
        </Switch>
    );
};

export default withRouter(App);
