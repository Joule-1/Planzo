import React from "react";
import {
    Logo,
    HomeIcon,
    CalendarIcon,
    ActivityIcon,
    ChatIcon,
    SettingsIcon,
    ThemeToggle_Light,
    ThemeToggle_Dark,
    UserAvatarDefaultIcon,
    SearchIcon,
} from "../assets";

const UserNavbar = () => {
    return (
        <section className="flex place-content-evenly items-center bg-gray-200 text-sm pt-3">
            <div className="flex items-center rounded-full bg-white px-4 h-13">
                <div className={`w-10 hover:scale-105`}>
                    <img src={Logo} className="w-full" />
                </div>
                <span className="poppins-semibold ml-2 text-xl">PingMe</span>
            </div>
            <div className="flex w-[50%] place-content-evenly items-center rounded-full bg-white h-13">
                <div className="flex cursor-pointer hover:text-[#4b82ff]">
                    <span className="my-auto">
                        <img
                            src={HomeIcon}
                            className="w-5 fill-current hover:text-[#4b82ff]"
                        />
                    </span>
                    &nbsp;
                    <span className="my-auto">Home</span>
                </div>
                <div className="flex cursor-pointer hover:text-[#4b82ff]">
                    <span className="my-auto">
                        <img
                            src={CalendarIcon}
                            className="w-5 fill-current hover:text-[#4b82ff]"
                        />
                    </span>
                    &nbsp;
                    <span className="my-auto">Calendar</span>
                </div>
                <div className="flex cursor-pointer hover:text-[#4b82ff]">
                    <span className="my-auto">
                        <img
                            src={ActivityIcon}
                            className="w-5 fill-current hover:text-[#4b82ff]"
                        />
                    </span>
                    &nbsp;
                    <span className="my-auto">Activity</span>
                </div>
                <div className="flex cursor-pointer hover:text-[#4b82ff]">
                    <span className="my-auto">
                        <img
                            src={ChatIcon}
                            className="w-5 fill-current hover:text-[#4b82ff]"
                        />
                    </span>
                    &nbsp;
                    <span className="my-auto">Messages</span>
                </div>
                <div className="flex cursor-pointer hover:text-[#4b82ff]">
                    <span className="my-auto">
                        <img
                            src={SettingsIcon}
                            className="w-5 fill-current hover:text-[#4b82ff]"
                        />
                    </span>
                    &nbsp;
                    <span className="my-auto">Settings</span>
                </div>
            </div>
            <div className="flex w-[25%] place-content-evenly items-center rounded-full bg-white h-13">
                <span className="flex rounded-full bg-gray-200 w-[75%] h-10 items-center">
                    <label htmlFor="searchbox" className="px-3">
                        <img src={SearchIcon} className="cursor-pointer w-5" />
                    </label>
                    <input type="text" id="searchbox" placeholder="Search here..."/>
                </span>
                <span className="rounded-full bg-gray-200 px-2 py-1">
                    <img src={ThemeToggle_Light} className="w-5" />
                </span>
                <span>
                    <img src={UserAvatarDefaultIcon} className="w-8" />
                </span>
            </div>
        </section>
    );
};

export default UserNavbar;
