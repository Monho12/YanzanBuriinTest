import { useContext, useEffect, useState } from "react";
import { CalendarComp } from "../components/calendarComp";
import { Doctors } from "../components/Doctors";
import { Hours } from "../components/Hours";
import style from "./designs/Calendar.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../contexts/DataProvider";
import { Order } from "../components/order";

export const Calendar = () => {
  const { data, setData } = useContext(DataContext);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className={style.container}>
      <CalendarComp setData={setData} />
      {data.Date && <Doctors />}
      {data.Doctor && <Hours />}
      {data.Hour && <Order />}
    </div>
  );
};
