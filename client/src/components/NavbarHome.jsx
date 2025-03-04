import React from "react";
import { Logo } from "../assets";

const imgStyle = "w-5 hover:scale-105";

const NavbarHome = () => {
    return (
        <section className="fixed z-10 flex h-13 w-full place-content-evenly items-center border-2 text-sm bg-white">
            <div className="flex items-center">
                <div className={`w-10 hover:scale-105`}>
                    <img src={Logo} className="w-full" />
                </div>
                <span className="poppins-semibold ml-2 text-xl">PingMe</span>
            </div>
            <div className="flex items-center">
                <span className="ml-10 cursor-pointer">Features</span>
                <span className="ml-10 cursor-pointer">Privacy</span>
                <span className="ml-10 cursor-pointer">Pricing</span>
            </div>
            <div className="flex items-center">
                <span className="ml-5 cursor-pointer">Sign In</span>
                <span className="ml-5 poppins-semibold cursor-pointer rounded-xl border-2 p-2 text-white bg-[#4b82ff] hover:text-[#4b82ff] hover:bg-white hover:border-[#4b82ff]">
                    Sign Up for Free
                </span>
            </div>
        </section>
    );
};

export default NavbarHome;
