import React, { useEffect } from "react";
import { useParams } from "react-router";
import api from "../utils/Axios";
import NotFound from "./NotFound";

const UserDashboard = () => {
    // const {userid, setUserId} = useContext(UserContext);
    const { userid } = useParams();

    useEffect(() => {
        if(userid)
            fetchUser();
    },[userid])

    const fetchUser = async () => {
        try {
            
            const res = await api.post("user/authenticate-user", {
                _id: userid,
            }, { withCredentials: true });
            console.log(res)
            console.log(res.data.data.fullname);
            // if(res.status === 200){
            //     return <NotFound />
            // }
        } catch (error) {
            console.log(error);
        }
    };
    
    return <section>Welcome, {}</section>;
};

export default UserDashboard;
