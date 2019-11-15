import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { fetchFromServer, getCookieToken } from "../../../helpers/functions";

const MailBox = ({ setCurrentMessages, name }) => {
    const getMessages = async () => {
        const type = name === "sent" ? name : "";
        const route = `messages/${type}`;
        const token = getCookieToken();
        const options = { headers: { Authorization: `Token ${token}` } };
        const messages = await fetchFromServer(route, options);
        setCurrentMessages(messages);
    };

    useEffect(() => {
        getMessages();
    }, []);
    return (
        <ListGroup.Item action href={`#${name}`} name={name} onClick={getMessages}>
            {name}
        </ListGroup.Item>
    );
};

export default MailBox;
