import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../contexts/DataProvider";
import style from "./designs/Order.module.css";

export const Order = () => {
  const { data } = useContext(DataContext);

  return (
    <div className={style.dataContainer}>
      <div className={style.data}>Date : {data.Date}</div>
      <div className={style.data}>Doctor : {data.Doctor}</div>
      <div className={style.data}>Hour : {data.Hour}</div>
      <Link to="/otp">
        <div>Confirm</div>
      </Link>
    </div>
  );
};
