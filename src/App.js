import React from "react";
import ReactRouterPropTypes from "react-router-prop-types";
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

App.propTypes = {
    history: ReactRouterPropTypes.history.isRequired,
    location: ReactRouterPropTypes.location,
    match: ReactRouterPropTypes.match
};

export default withRouter(App);
