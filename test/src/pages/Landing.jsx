import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../contexts/DataProvider";
import style from "./designs/Landing.module.css";

export const Landing = () => {
  const { data } = useContext(DataContext);

  return (
    <div className={style.container}>
      <Link to="/calendar" style={{ textDecoration: "none", color: "red" }}>
        <div className="text-2xl font-medium">{data.Hour ? "confirmed" : "Appointment"}</div>
      </Link>
    </div>
  );
};
