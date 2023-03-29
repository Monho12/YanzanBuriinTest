import { useState } from "react";
import Calendar from "react-calendar";
import moment from "moment/moment";
import style from "./designs/Calendar.module.css";

export const CalendarComp = () => {
  return (
    <div className={style.container}>
      <Calendar
        minDate={new Date()}
        view="month"
        onClickDay={(date) => {
          console.log(moment(date).format("YYYY-MM-DD"));
        }}
      />
    </div>
  );
};
