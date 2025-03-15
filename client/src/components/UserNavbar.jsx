import React from "react";
import { Logo, HomeIcon, CalendarIcon, ActivityIcon, ChatIcon, SettingsIcon } from "../assets";

const UserNavbar = () => {
    return (
        <section className="shadom-md fixed z-10 flex h-15 w-full place-content-evenly items-center bg-gray-200 text-sm">
            <div className="flex items-center px-4 rounded-full bg-white">
                <div className={`w-10 hover:scale-105`}>
                    <img src={Logo} className="w-full" />
                </div>
                <span className="poppins-semibold ml-2 text-xl">PingMe</span>
            </div>
            <div className="flex items-center">

                <div className="flex cursor-pointer hover:text-[#4b82ff]">
                    <span className="my-auto">
                        <img src={HomeIcon} className="w-5 fill-current hover:text-[#4b82ff]"/>
                    </span>&nbsp;
                    <span className="my-auto">
                        Home
                    </span>
                </div>
                <span
                    className="ml-10 cursor-pointer hover:text-[#4b82ff]"
                >
                    Privacy
                </span>
                <span className="ml-10 cursor-pointer hover:text-[#4b82ff]">
                    Pricing
                </span>
            </div>
            <div className="flex items-center">
                <span className="ml-5 cursor-pointer hover:text-[#4b82ff]">
                    <span>Sign In</span>
                </span>
                <span className="poppins-semibold ml-5 cursor-pointer rounded-xl border-2 bg-[#4b82ff] p-2 text-white hover:border-[#4b82ff] hover:bg-white hover:text-[#4b82ff]">
                    <span>Sign Up for Free</span>
                </span>
            </div>
        </section>
    );
};

export default UserNavbar;
