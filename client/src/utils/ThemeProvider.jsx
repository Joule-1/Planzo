import React from "react";
import { createContext } from "react";
import Navbar from "../components/Navbar";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    return (
        <section>
            <ThemeContext.Provider>
                <Navbar />
                {children}
            </ThemeContext.Provider>
        </section>
    );
};

export default ThemeProvider;
