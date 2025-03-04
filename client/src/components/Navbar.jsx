import React from "react";
import { Logo } from "../assets";

const Navbar = () => {
    return (
        <section className="h-15 w-full border-2 z-10 fixed">
            <div className="w-10">
                <img src={Logo} className="w-full" />
            </div>
        </section>
    );
};

export default Navbar;
