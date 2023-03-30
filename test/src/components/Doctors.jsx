import { useContext } from "react";
import { DataContext } from "../contexts/DataProvider";
import style from "./designs/doctors.module.css";

export const Doctors = () => {
  const { setData, doctorsData } = useContext(DataContext);
  return (
    <div className={style.container}>
      {doctorsData.map((item, index) => {
        return (
          <div className={style.innerContainer} key={index}>
            Doctors :
            <button
              onClick={() => {
                setData((prev) => ({
                  ...prev,
                  Doctor: item.name,
                }));
              }}
            >
              {item.name}
            </button>
          </div>
        );
      })}
    </div>
  );
};
