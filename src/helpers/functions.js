export const fetchFromServer = async (route, options) => {
    const url = `${process.env.REACT_APP_URL}/${route}`;
    try {
        const response = await fetch(url, options);
        const json = await response.json();
        return json;
    } catch (error) {
        alert(error);
        console.error(error);
    }
};

export const updateCookie = (value, expireTime) => {
    let date = new Date();
    date = new Date(date.getTime() + 1000 * expireTime).toGMTString();
    document.cookie = `${value}; expires=${date};`;
};

export const getCookieToken = () => {
    const cookies = document.cookie;
    const start = cookies.indexOf("netPigeonToken");
    if (start < 0) {
        return "";
    }
    let end = cookies.indexOf(";", start);
    end = end < 0 ? cookies.length : end;
    const token = cookies.slice(start, end);
    return token.split("=")[1];
};

export const buildFetchOptions = (method, body) => {
    const token = getCookieToken();
    const options = {
        method,
        headers: { "Content-Type": "application/json" }
    };
    if (body) {
        options.body = JSON.stringify(body);
    }
    if (token) {
        options.headers["Authorization"] = `Token ${token}`;
    }
    return options;
};
