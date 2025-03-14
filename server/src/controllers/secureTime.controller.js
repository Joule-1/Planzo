const secureTime = async() => {
    try {
        const userIp = req.headers["x-forwarded-for"] || req.connection.remoteAddress;

        const response = await fetch(
            `https://timeapi.io/api/time/current/ip?ipAddress=${userIp}`
        );
        const timeData = await response.json();

        console.log(timeData);

        res.json({
            timeZone: timeData.timeZone,
            dateTime: timeData.dateTime,
            timestamp: timeData.unixtime,
        });
    } catch (error) {
        console.error("Error fetching secure time:", error);
        res.status(500).json({ error: "Failed to fetch time" });
    }
};

export default secureTime;
