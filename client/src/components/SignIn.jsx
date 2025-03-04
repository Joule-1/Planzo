import React from "react";

const inputStyle = "my-5 w-[40%] border-1 px-2 py-1 rounded-lg text-lg";

const SignIn = () => {
    return (
        <section className="flex items-center pt-15">
            <div className="w-[50%] border-1">
                <div className="flex flex-col items-center justify-center">
                    <input
                        type="text"
                        className={inputStyle}
                        placeholder="Username or E-mail"
                    />
                    <input
                        type="password"
                        className={inputStyle}
                        placeholder="Password"
                    />
                    <button
                        type="submit"
                        className="cursor-pointer border-1 w-[15%] py-1 text-lg rounded-lg mt-3"
                    >
                        Submit
                    </button>
                </div>
            </div>
            <div className="w-[50%] border-1">
                <img src="../assets/SignIn.jpg" className="w-full" />
            </div>
        </section>
    );
};

export default SignIn;
