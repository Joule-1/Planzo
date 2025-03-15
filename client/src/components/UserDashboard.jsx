import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../utils/Axios";
import NotFound from "./NotFound";
import UserNavbar from "./UserNavbar";

const UserDashboard = () => {
    const { userid } = useParams();
    const [userinfo, setUserInfo] = useState();
    const [notFound, setNotFound] = useState();

    useEffect(() => {
        if (userid) fetchUser();
    }, [userid]);

    const fetchUser = async () => {
        try {
            const res = await api.post(
                "/authenticate-user",
                {
                    _id: userid,
                },
                { withCredentials: true }
            );

            if (res.data.success == true) {
                setUserInfo(res.data.data.fullname);
                setNotFound(false);
            } else {
                setNotFound(true);
            }
        } catch (error) {
            setNotFound(true);
        }
    };

    if (notFound) return <NotFound />;

    return (
        <section className="h-screen bg-gray-200">
            <UserNavbar />
        </section>
    );
};

export default UserDashboard;
