import React, { useState, useEffect } from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import LoginPage from "./components/loginPage";
import EmailsPage from "./components/emailsPage";

const App = ({ history }) => {
    // const [token, setToken] = useState("");
    // useEffect(() => {
    //   const logIn = async () => {
    //     console.log("login");
    //     const url = "https://messaging-test.bixly.com/api-token-auth/";
    //     const login = { username: "test", password: "test123!" };
    //     const options = {
    //       method: "POST",
    //       body: JSON.stringify(login),
    //       headers: {
    //         "Content-Type": "application/json"
    //       }
    //     };
    //     try {
    //       const response = await fetch(url, options);
    //       const json = await response.json();
    //       console.log("success: ", response, json);
    //       setToken(json.token);
    //     } catch (error) {
    //       console.log("error :", error);
    //     }
    //   };
    //   logIn();
    // }, []);

    // //body, id, read, receiver, sender, sent, title

    // useEffect(() => {
    //   const getMessages = async () => {
    //     console.log("get messages");
    //     const url = `https://messaging-test.bixly.com/messages/77`;
    //     try {
    //       const response = await fetch(url, {
    //         headers: { Authorization: `Token ${token}` }
    //       });
    //       const json = await response.json();
    //       console.log("success: ", response, json);
    //     } catch (error) {
    //       console.log("error :", error);
    //     }
    //   };

    //   const updateMessages = async () => {
    //     console.log("update messages");
    //     const url = `https://messaging-test.bixly.com/messages/`;
    //     const newMessage = {
    //       title: "testing",
    //       message: "this is my test message",
    //       body: "this is my test message body",
    //       receiver: "tomk"
    //     };
    //     const auth = { Authorization: `Token ${token}` };
    //     const options = {
    //       method: "POST",
    //       body: JSON.stringify(newMessage),
    //       headers: {
    //         "Content-Type": "application/json",
    //         ...auth
    //       }
    //     };
    //     try {
    //       const response = await fetch(url, options);
    //       const json = await response.json();
    //       console.log("success: ", response, json);
    //     } catch (error) {
    //       console.log("error :", error);
    //     }
    //   };

    //   (async () => {
    //     if (token) {
    //       const update = await updateMessages();
    //       const get = await getMessages();
    //     }
    //   })();
    // }, [token]);
    return (
        <Switch>
            <Route exact path="/" render={() => <LoginPage history={history} />} />
            <Route path="/mail" component={EmailsPage} />
        </Switch>
    );
};

export default withRouter(App);
