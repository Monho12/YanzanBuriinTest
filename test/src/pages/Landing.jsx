import { Link } from "react-router-dom";
import style from "./designs/Landing.module.css";

export const Landing = () => {
  return (
    <div className={style.container}>
      <div className={style.div}>
        <Link to="/otp" style={{ textDecoration: "none", color: "red" }}>
          <h1>OTP TEST</h1>
        </Link>
      </div>
      <div className={style.div}>
        <Link to="/calendar" style={{ textDecoration: "none", color: "red" }}>
          <h1>CALENDAR TEST</h1>
        </Link>
      </div>
    </div>
  );
};
