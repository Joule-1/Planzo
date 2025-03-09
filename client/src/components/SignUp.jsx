import React, { useState } from "react";
import {
    Logo,
    MailIcon,
    PasswordIcon,
    GoogleIcon,
    AppleIcon,
    HidePasswordIcon,
    ShowPasswordIcon,
    NameIcon,
} from "../assets";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [PasswordVisibility, setPasswordVisibility] = useState("password");

    return (
        <section className="flex h-screen flex-col items-center">
            <div className="top-0 flex h-15 w-full place-content-between items-center bg-white px-10 shadow-md">
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
                        <Link to="/signin">Sign In</Link>
                    </button>
                </div>
            </div>
            <div className="my-auto flex justify-evenly rounded-2xl p-5 shadow-2xl">
                <div className="ml-2">
                    <div className="poppins-semibold mb-8 text-4xl">
                        Sign Up
                    </div>
                    <div className="poppins-semibold my-4 text-xs">
                        Sign Up with Open account
                    </div>
                    <div className="poppins-semibold flex">
                        <div className="mr-2 flex cursor-pointer items-center justify-center rounded-lg border-1 border-gray-400 px-10 py-2 hover:border-gray-600">
                            <div className="w-5">
                                <img src={GoogleIcon} />
                            </div>
                            <span>&nbsp;&nbsp;Google</span>
                        </div>
                        <div className="flex cursor-pointer items-center justify-center rounded-lg border-1 border-gray-400 px-10 py-2 hover:border-gray-600">
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
                        <div className="my-4 flex items-center rounded-lg border border-transparent bg-gray-100 text-sm transition-all duration-300 hover:border-[#4b82ff]">
                            <label htmlFor="name" className="rounded-l-lg h-12 flex items-center">
                                <img src={NameIcon} className="pr-1 pl-2 w-8" />
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Name"
                                className="w-full pl-2 h-12"
                                minLength={6}
                                maxLength={254}
                                autoComplete="off"
                                autoFocus
                                required
                            />
                        </div>
                        <div className="my-4 flex items-center rounded-lg border border-transparent bg-gray-100 text-sm transition-all duration-300 hover:border-[#4b82ff]">
                            <label htmlFor="email" className="rounded-l-lg h-12 flex items-center">
                                <img src={MailIcon} className="pr-1 pl-2 w-8" />
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Email"
                                className="w-full pl-2 h-12"
                                minLength={6}
                                maxLength={254}
                                autoComplete="off"
                                required
                            />
                        </div>
                        <div className="my-4 flex items-center rounded-lg border border-transparent bg-gray-100 text-sm transition-all duration-300 hover:border-[#4b82ff]">
                            <label htmlFor="password" className="rounded-l-lg h-12 flex items-center">
                                <img src={PasswordIcon} className="pr-1 pl-2 w-9" />
                            </label>
                            <input
                                type={PasswordVisibility}
                                id="password"
                                placeholder="Password"
                                className="w-full pl-2 h-12"
                                minLength={3}
                                maxLength={100}
                                autoComplete="off"
                                required
                            />
                            <span
                                className="rounded-r-lg h-12 flex items-center"
                                onClick={() =>
                                    setPasswordVisibility(
                                        PasswordVisibility === "password"
                                            ? "text"
                                            : "password"
                                    )
                                }
                            >
                                <img
                                    src={
                                        PasswordVisibility === "password"
                                            ? HidePasswordIcon
                                            : ShowPasswordIcon
                                    }
                                    className="mr-2 w-4 cursor-pointer"
                                />
                            </span>
                        </div>
                        <div className="poppins-light text-xs text-gray-500">
                            By signing up, you agree to our{" "}
                            <Link
                                to="/privacy"
                                target="_blank"
                                className="underline hover:text-gray-900"
                            >
                                Terms of Service
                            </Link>{" "}
                            and <br />
                            <Link
                                to="/tos"
                                target="_blank"
                                className="underline hover:text-gray-900"
                            >
                                Privacy Policy.
                            </Link>
                        </div>
                        <button className="poppins-semibold my-4 flex cursor-pointer items-center justify-center rounded-2xl border-2 border-transparent bg-[#4b82ff] px-2 py-2 text-sm text-white transition-all duration-400 hover:border-[#4b82ff] hover:bg-white hover:text-[#4b82ff]">
                            Get Started
                        </button>
                        <div className="mx-auto text-xs">
                            <span className="text-gray-500">
                                Already have an account?
                            </span>
                            <span className="poppins-semibold ml-2 cursor-pointer rounded-xl text-[#4b82ff] hover:underline">
                                <Link to="/signin">Sign In</Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignUp;
