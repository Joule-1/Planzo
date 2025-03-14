import React, { useEffect } from "react";
import { LeftArrowIcon, RightArrowIcon, CalendarIcon } from "../assets";
import getCurrentTime from "./GetCurrentTime.js";

const Calendar = () => {

    useEffect(() => {
       
        const fetchTime = async() => {
            const currentTime = await getCurrentTime();
            console.log(currentTime);
        }

        fetchTime();
    }, [])
    

    return (
        <section className="grid grid-cols-2 grid-rows-2 border">
            <div className="h-[50vh] border">1</div>
            <div className="h-[50vh] border">2</div>
            <div className="h-[50vh] border">
                <div className="flex">
                    <div className="poppins-semibold text-xl">
                        Upcoming Schedule
                    </div>
                    <div className="flex border">
                        <span>
                            <img src={LeftArrowIcon} />
                        </span>
                        <div>
                            <span></span>
                            <span>
                                <img src={CalendarIcon} />
                            </span>
                        </div>
                        <span>
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
