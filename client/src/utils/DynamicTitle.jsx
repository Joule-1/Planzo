import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
    const location = useLocation();

    useEffect(() => {
        document.title =
            `${location.pathname.slice(1).trim() === "" ? "PingMe" : `${location.pathname.slice(1).charAt(0).toUpperCase() + location.pathname.slice(2)} - PingMe`}` ||
            "PingMe";
    }, [location.pathname]);

    return null;
};

export default DynamicTitle;
