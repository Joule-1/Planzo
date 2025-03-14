async function getCurrentTime() {
    try {
        const responseIP = await fetch("https://api.ipify.org?format=json");
        const userIp = await responseIP.json();

        const response = await fetch(
            `https://timeapi.io/api/time/current/ip?ipAddress=${userIp.ip}`
        );

        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default getCurrentTime;
