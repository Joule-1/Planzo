import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const DynamicTitle = () => {
    const location = useLocation();

    useEffect(() => {
        document.title = `${location.pathname.slice(1)} - PingMe` || "PingMe";
    }, [location.pathname]);

    return null;
};

export default DynamicTitle;
