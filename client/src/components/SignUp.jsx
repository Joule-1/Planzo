import React, { useState } from "react";
import {
    Logo,
    MailIcon,
    PasswordIcon,
    GoogleIcon,
    AppleIcon,
    SignUpHeroImg,
    HidePasswordIcon,
    ShowPasswordIcon,
} from "../assets";
import { Link } from "react-router-dom";

const SignUp = () => {

    const [PasswordVisibility, setPasswordVisibility] = useState("password")

    return (
        <section className="flex h-screen items-center">
            <div className="fixed top-0 flex h-15 w-full place-content-between items-center bg-white px-10 shadow-md">
                <div className="flex items-center">
                    <div className={`w-10 hover:scale-105`}>
                        <img src={Logo} className="w-full" />
                    </div>
                    <span className="poppins-semibold ml-2 text-xl">
                        PingMe
                    </span>
                </div>
                <div className="text-xs">
                    <span className="text-gray-500">
                        Already have an account?
                    </span>
                    <button className="poppins-semibold ml-2 cursor-pointer rounded-xl border-2 bg-[#4b82ff] p-2 text-white hover:border-[#4b82ff] hover:bg-white hover:text-[#4b82ff]">
                        <Link to="/SignIn">Sign In</Link>
                    </button>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="w-[40%]">
                    <img src={SignUpHeroImg} className="w-[80%]" />
                </div>
                <div className="my-auto ml-2">
                    <div className="poppins-semibold mb-8 text-5xl">
                        Sign Up
                    </div>
                    <div className="poppins-semibold my-4 text-xs">
                        Sign Up with Open account
                    </div>
                    <div className="poppins-semibold flex">
                        <div className="mr-2 flex cursor-pointer items-center justify-center rounded-lg border-1 border-gray-400 px-10 py-2">
                            <div className="w-5">
                                <img src={GoogleIcon} />
                            </div>
                            <span>&nbsp;&nbsp;Google</span>
                        </div>
                        <div className="flex cursor-pointer items-center justify-center rounded-lg border-1 border-gray-400 px-10 py-2">
                            <div className="w-5">
                                <img src={AppleIcon} />
                            </div>
                            <span>&nbsp;&nbsp;Apple ID</span>
                        </div>
                    </div>
                    <hr className="my-6 border-1 border-gray-200" />
                    <div className="poppins-semibold text-xs">
                        or continue with email address
                    </div>
                    <form className="flex w-full flex-col">
                        <div className="my-4 flex items-center rounded-lg border-1 border-transparent bg-gray-100 px-2 py-3 text-sm transition-all duration-300 hover:border-[#4b82ff]">
                            <span>
                                <img src={MailIcon} className="mr-2 w-6" />
                            </span>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full pl-2"
                                minLength="6"
                                maxLength="254"
                                autoFocus
                                required
                            />
                        </div>
                        <div className="my-4 flex items-center rounded-lg border-1 border-transparent bg-gray-100 px-2 py-3 text-sm transition-all duration-300 hover:border-[#4b82ff]">
                            <span>
                                <img src={PasswordIcon} className="mr-2 w-6" />
                            </span>
                            <input
                                type={PasswordVisibility}
                                placeholder="Password"
                                className="w-full pl-2"
                                minLength="3"
                                maxLength="100"
                                required
                            />
                            <span onClick={() => (setPasswordVisibility(PasswordVisibility === "password" ? "text" : "password" ))}>
                                <img src={(PasswordVisibility === "password" ? HidePasswordIcon : ShowPasswordIcon )} className="mr-2 w-4 cursor-pointer" />
                            </span>
                        </div>
                        <button className="poppins-semibold my-4 flex cursor-pointer items-center justify-center rounded-2xl border-2 border-transparent bg-[#4b82ff] px-2 py-2 text-sm text-white transition-all duration-400 hover:border-[#4b82ff] hover:bg-white hover:text-[#4b82ff]">
                            Get Started
                        </button>
                        <div className="text-xs mx-auto">
                            <span className="text-gray-500">
                                Already have an account?
                            </span>
                            <span className="poppins-semibold ml-2 cursor-pointer rounded-xl text-[#4b82ff] hover:underline">
                                <Link to="/SignIn">Sign In</Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
