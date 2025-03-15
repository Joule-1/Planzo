import React, { useEffect, useState } from "react";
import {
    LeftArrowIcon,
    RightArrowIcon,
    CalendarIcon,
    DownArrowIcon,
} from "../assets";
import getCurrentTime from "./GetCurrentTime.js";

const Calendar = () => {
    const weekDay = {
        Monday: {
            shortName: "Mon",
            dayPosition: 1,
        },
        Tuesday: {
            shortName: "Tue",
            dayPosition: 2,
        },
        Wednesday: {
            shortName: "Wed",
            dayPosition: 3,
        },
        Thursday: {
            shortName: "Thu",
            dayPosition: 4,
        },
        Friday: {
            shortName: "Fri",
            dayPosition: 5,
        },
        Saturday: {
            shortName: "Sat",
            dayPosition: 6,
        },
        Sunday: {
            shortName: "Sun",
            dayPosition: 7,
        },
    };

    const weekDayPosition = {
        1: "Mon",
        2: "Tue",
        3: "Wed",
        4: "Thu",
        5: "Fri",
        6: "Sat",
        7: "Sun",
    };

    const months = {
        1: {
            name: "January",
            days: 31,
            monthPosition: 1,
        },
        2: {
            name: "February",
            days: 28,
            monthPosition: 2,
        }, // 29 in a leap year
        3: {
            name: "March",
            days: 31,
            monthPosition: 3,
        },
        4: {
            name: "April",
            days: 30,
            monthPosition: 4,
        },
        5: {
            name: "May",
            days: 31,
            monthPosition: 5,
        },
        6: {
            name: "June",
            days: 30,
            monthPosition: 6,
        },
        7: {
            name: "July",
            days: 31,
            monthPosition: 7,
        },
        8: {
            name: "August",
            days: 31,
            monthPosition: 8,
        },
        9: {
            name: "September",
            days: 30,
            monthPosition: 9,
        },
        10: {
            name: "October",
            days: 31,
            monthPosition: 10,
        },
        11: {
            name: "November",
            days: 30,
            monthPosition: 11,
        },
        12: {
            name: "December",
            days: 31,
            monthPosition: 12,
        },
    };

    const [currentTime, setCurrentTime] = useState("Current Time");
    const [currentDay, setCurrentDay] = useState("Date");
    const [currentMonth, setCurrentMonth] = useState("Month");
    const [currentMonthPosition, setCurrentMonthPosition] = useState(12);
    const [currentYear, setCurrentYear] = useState("Year");
    const [currentDayOfWeek, setCurrentDayOfWeek] = useState("Monday");
    useEffect(() => {
        const fetchTime = async () => {
            const currentTime = await getCurrentTime();
            setCurrentTime(currentTime);
            setCurrentMonth(months[currentTime.month].name);
            setCurrentMonthPosition(currentTime.month);
            setCurrentYear(currentTime.year);
            setCurrentDay(currentTime.day);
            setCurrentDayOfWeek(currentTime.dayOfWeek);
        };

        fetchTime();
    }, []);

    const normalizeWeekDays = (dayOfWeek) => {
        if (dayOfWeek > 7 || dayOfWeek < 1) dayOfWeek %= 7;

        return weekDayPosition[dayOfWeek];
    };

    const normalizeMonthDays = (dateOfMonth) => {
        console.log(currentMonthPosition)
        const totaldaysofmonth = months[currentMonthPosition].days;
        if (dateOfMonth > totaldaysofmonth) dateOfMonth %= totaldaysofmonth;
        if (dateOfMonth < 1) {
            if (currentMonthPosition == 1) {
                dateOfMonth = months[12].days;
            }
            dateOfMonth = months[currentMonthPosition - 1].days;
        }
        return dateOfMonth;
    };

    return (
        <section className="grid grid-cols-2 grid-rows-2 border">
            <div className="h-[50vh] border">1</div>
            <div className="h-[50vh] border">2</div>
            <div className="h-[50vh] border">
                <div>
                    <div className="flex place-content-between items-center px-4 pt-2">
                        <div className="poppins-semibold text-xl">
                            Upcoming Schedule
                            {console.log(currentTime)}
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2 rounded-full bg-gray-200 p-2">
                                <img src={LeftArrowIcon} />
                            </span>
                            <div className="poppins-medium flex items-center rounded-full bg-gray-200 px-2 py-2">
                                <span className="mx-2">
                                    <img src={CalendarIcon} />
                                </span>
                                <span>
                                    {currentMonth} {currentYear}
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
                    <div className="mt-5 grid grid-cols-6 px-4 text-center poppins-semibold">
                        <span className="rounded-tl-full border-1 border-gray-300"></span>
                        <span className="border-1 border-gray-300">
                            {normalizeWeekDays(
                                weekDay[currentDayOfWeek].dayPosition - 1
                            )}&nbsp;
                            {normalizeMonthDays(currentDay - 1)}
                        </span>
                        <span className="border-1 border-b-2 border-gray-300 border-b-[#4b82ff] text-[#4b82ff]">
                            {weekDay[currentDayOfWeek].shortName} {currentDay}
                        </span>
                        <span className="border-1 border-gray-300">
                            {normalizeWeekDays(
                                weekDay[currentDayOfWeek].dayPosition + 1
                            )}&nbsp;
                            {normalizeMonthDays(currentDay + 1)}
                        </span>
                        <span className="border-1 border-gray-300">
                            {normalizeWeekDays(
                                weekDay[currentDayOfWeek].dayPosition + 2
                            )}&nbsp;
                            {normalizeMonthDays(currentDay + 2)}
                        </span>
                        <span className="rounded-tr-full border-1 border-gray-300">
                            {normalizeWeekDays(
                                weekDay[currentDayOfWeek].dayPosition + 3
                            )}&nbsp;
                            {normalizeMonthDays(currentDay + 3)}
                        </span>
                    </div>
                </div>
            </div>
            <div className="h-[50vh] border">4</div>
        </section>
    );
};

export default Calendar;
