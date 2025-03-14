import React, { useEffect, useState } from "react";
import {
    LeftArrowIcon,
    RightArrowIcon,
    CalendarIcon,
    DownArrowIcon,
} from "../assets";
import getCurrentTime from "./GetCurrentTime.js";

const Calendar = () => {
    const [currentTime, setCurrentTime] = useState("Current Time");
    useEffect(() => {
        const fetchTime = async () => {
            const currentTime = await getCurrentTime();
            setCurrentTime(currentTime);
        };

        fetchTime();
    }, []);

    return (
        <section className="grid grid-cols-2 grid-rows-2 border">
            <div className="h-[50vh] border">1</div>
            <div className="h-[50vh] border">2</div>
            <div className="h-[50vh] border">
                <div className="flex place-content-between items-center pt-2">
                    <div className="poppins-semibold ml-4 text-xl">
                        Upcoming Schedule
                        {console.log(currentTime)}
                    </div>
                    <div className="mr-4 flex items-center">
                        <span className="mr-2 rounded-full bg-gray-200 p-2">
                            <img src={LeftArrowIcon} />
                        </span>
                        <div className="poppins-medium flex items-center rounded-full bg-gray-200 px-2 py-2">
                            <span className="mx-2">
                                <img src={CalendarIcon} />
                            </span>
                            <span>
                                {currentTime.month} {currentTime.year}
                            </span>
                            <span className="mx-2">
                                <img src={DownArrowIcon} />
                            </span>
                        </div>
                        <span className="ml-2 rounded-full bg-gray-200 p-2">
                            <img src={RightArrowIcon} />
                        </span>
                    </div>
                </div>
            </div>
            <div className="h-[50vh] border">4</div>
        </section>
    );
};

export default Calendar;
