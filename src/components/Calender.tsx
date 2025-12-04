import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import GlobalStore from "../store/GlobalStore";

export default ({}: {}) => {
  const setDate = GlobalStore((state) => state.setBookingDate);
  const selectedDate = GlobalStore((state) => state.bookingDateSelected);

  const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const MonthsName = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Ocuotober",
    "November",
    "December",
  ];

  const AvailableDates = [
    { date: 17, monthIndex: 10, year: 2025 },
    { date: 18, monthIndex: 10, year: 2025 },
    { date: 2, monthIndex: 11, year: 2025 },
  ];

  // helper: days in month (handles leap years)
  function daysInMonth(year: number, monthIndex: number) {
    // monthIndex: 0..11
    return new Date(year, monthIndex + 1, 0).getDate();
  }

  const currentDate = new Date(Date.now());

  // use these
  const [year, setYear] = useState(currentDate.getFullYear());
  const [monthIndex, setMonthIndex] = useState(currentDate.getMonth()); // December

  // start of month
  let firstDate = new Date(year, monthIndex, 1);
  let firstDay = firstDate.getDay(); // 0..6 (Sun..Sat)

  const daysThisMonth = daysInMonth(year, monthIndex);

  // total cells = smallest multiple of 7 that contains firstDay + daysThisMonth
  const totalCells = Math.ceil((firstDay + daysThisMonth) / 7) * 7;

  // indices for prev/next months (and their years)
  const prevMonthIndex = monthIndex === 0 ? 11 : monthIndex - 1;
  const nextMonthIndex = monthIndex === 11 ? 0 : monthIndex + 1;
  const yearOfPrevMonth = monthIndex === 0 ? year - 1 : year;
  const yearOfNextMonth = monthIndex === 11 ? year + 1 : year;

  const daysPrevMonth = daysInMonth(yearOfPrevMonth, prevMonthIndex);

  const calendarDates = Array.from({ length: totalCells }, (_, i) => {
    if (i < firstDay) {
      // leading days (previous month)
      return {
        day: daysPrevMonth - firstDay + i + 1,
        monthOffset: -1, // previous month
        monthIndex: prevMonthIndex,
        year: yearOfPrevMonth,
      };
    }

    const dayIndex = i - firstDay; // 0-based into current month
    if (dayIndex < daysThisMonth) {
      // current month
      return {
        day: dayIndex + 1,
        monthOffset: 0,
        monthIndex: monthIndex,
        year: year,
      };
    }

    // trailing days (next month)
    return {
      day: dayIndex - daysThisMonth + 1,
      monthOffset: +1,
      monthIndex: nextMonthIndex,
      year: yearOfNextMonth,
    };
  });

  return (
    <article>
      <section className="border-b pb-3 mb-3 text-sm flex items-center justify-between">
        <p>
          {MonthsName[monthIndex]} {year}
        </p>
        <div className="flex items-center gap-x-2 ">
          <ChevronLeft
            className="cursor-pointer"
            width={18}
            height={18}
            onClick={() => {
              if (monthIndex == 0) {
                setYear(year - 1);
                setMonthIndex(11);
              } else {
                setMonthIndex((prev) => prev - 1);
              }
            }}
          />
          <ChevronRight
            className="cursor-pointer"
            width={18}
            height={18}
            onClick={() => {
              if (monthIndex == 11) {
                setYear(year + 1);
                setMonthIndex(0);
              } else {
                setMonthIndex((prev) => prev + 1);
              }
            }}
          />
        </div>
      </section>
      <section className="[&>div]:grid-cols-7 [&>div]:grid text-center">
        <div className="text-sm mb-3">
          {DAYS.map((curr) => (
            <span>{curr}</span>
          ))}
        </div>

        <div className=" gap-y-3">
          {calendarDates.map((v) => {
            const match = AvailableDates.find((curr) => {
              return (
                curr.date == v.day &&
                curr.monthIndex == v.monthIndex &&
                curr.year == v.year
              );
            });

            return (
              <span
                className={` select-none ${
                  match ? "cursor-pointer hover:font-medium" : "text-black/20"
                } ${
                  selectedDate?.date == v.day &&
                  selectedDate.monthIndex == v.monthIndex &&
                  selectedDate.year == v.year
                    ? "border"
                    : ""
                }`}
                onClick={() => {
                  if (match) setDate(v.day, v.monthIndex, v.year);
                }}
              >
                {v.day}
              </span>
            );
          })}
        </div>
      </section>
    </article>
  );
};
