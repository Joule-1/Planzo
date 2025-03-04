import React from "react";

const Home = () => {
    return (
        <section className="pt-13 border-1">
            <div className="flex items-center place-content-between">
                <div className="border-1 mx-auto">
                    <div className="poppins-bold text-5xl">
                        Track. Plan.{" "}
                        <span className="text-[#4b82ff]">Succeed.</span>
                    </div>
                    <div className="poppins-semibold mt-2 text-base text-gray-500">
                        Escape the clutter and chaos—unleash your productivity
                        with PingMe.
                    </div>
                    <button className=" my-5 poppins-semibold text-xl cursor-pointer rounded-xl border-2 p-2 text-white bg-[#4b82ff] hover:text-[#4b82ff] hover:bg-white hover:border-[#4b82ff]">
                        Get Started
                    </button>
                </div>
                <div className="w-[50%]">
                    <img src="../src/assets/Home.jpg" />
                </div>
            </div>
        </section>
    );
};

export default Home;
