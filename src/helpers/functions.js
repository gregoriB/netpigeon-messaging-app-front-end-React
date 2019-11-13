export const fetchFromServer = async (route, options) => {
    const url = `https://messaging-test.bixly.com/${route}`;
    try {
        const response = await fetch(url, options);
        const json = await response.json();
        return json;
    } catch (error) {
        console.error("error :", error);
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
        return;
    }

    let end = cookies.indexOf(";", start);
    end = end < 0 ? cookies.length : end;
    const token = cookies.slice(start, end);

    return token.split("=")[1];
};