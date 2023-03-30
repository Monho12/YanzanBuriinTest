import Calendar from "react-calendar";
import moment from "moment/moment";
import style from "./designs/Calendar.module.css";
import { useContext } from "react";
import { DataContext } from "../contexts/DataProvider";

export const CalendarComp = () => {
  const { setData } = useContext(DataContext);

  return (
    <div className={style.container}>
      <Calendar
        minDate={new Date()}
        view="month"
        onClickDay={(date) =>
          setData((item) => ({
            ...item,
            Date: moment(date).format("YYYY-MM-DD"),
          }))
        }
      />
    </div>
  );
};
