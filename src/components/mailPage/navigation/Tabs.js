import React, { useState, useEffect } from "react";
import { Tab } from "react-bootstrap";
import { fetchFromServer, buildFetchOptions, getCookieToken } from "../../../helpers/functions";
import TabsSideBar from "./TabsSideBar";
import TabsMail from "./TabsMail";

const Tabs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentMessages, setCurrentMessages] = useState([]);

    const retrieveMessages = async type => {
        const route = `messages/${type}`;
        const options = buildFetchOptions("GET");
        const messages = await fetchFromServer(route, options);
        setCurrentMessages(messages);
    };

    //retrieve messages on mount if logged in
    useEffect(() => {
        getCookieToken() && retrieveMessages("");
    }, []);

    return (
        <div className="d-flex">
            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#inbox">
                <TabsSideBar
                    retrieveMessages={retrieveMessages}
                    isModalOpen={isModalOpen}
                    setIsModalOpen={setIsModalOpen}
                />
                <TabsMail retrieveMessages={retrieveMessages} currentMessages={currentMessages} />
            </Tab.Container>
        </div>
    );
};

export default Tabs;
