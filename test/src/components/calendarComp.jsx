import Calendar from "react-calendar";
import moment from "moment/moment";
import style from "./designs/Calendar.module.css";

export const CalendarComp = ({ setData, data }) => {
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
