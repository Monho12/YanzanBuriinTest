import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../contexts/DataProvider";
import style from "./designs/Landing.module.css";

export const Landing = () => {
  const { data } = useContext(DataContext);

  return (
    <div className={style.container}>
      <Link to="/calendar" style={{ textDecoration: "none", color: "red" }}>
        <h1>{data.Hour ? "confirmed" : "Appointment"}</h1>
      </Link>
    </div>
  );
};
