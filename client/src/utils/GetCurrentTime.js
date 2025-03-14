import api from "./Axios";

const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December",
};

async function getCurrentTime() {
    try {
        const response = await api.get(`/secure-time`);
        response.data.data.month = months[response.data.data.month];
        return response.data.data;
    } catch (error) {
        return null;
    }
}

export default getCurrentTime;
