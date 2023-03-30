import { useContext } from "react";
import { DataContext } from "../contexts/DataProvider";
import style from "./designs/hours.module.css";

const hourData = [
  { hour: 10, possible: false },
  { hour: 11, possible: true },
  { hour: 12, possible: true },
  { hour: 13, possible: true },
  { hour: 14, possible: true },
  { hour: 15, possible: false },
  { hour: 16, possible: true },
  { hour: 17, possible: true },
  { hour: 18, possible: true },
  { hour: 19, possible: false },
  { hour: 20, possible: true },
];

export const Hours = () => {
  const { setData } = useContext(DataContext);

  return (
    <div className={style.container}>
      {hourData.map((item, index) => {
        return (
          <div key={index}>
            <button
              className={!item.possible ? style.disabled : style.active}
              disabled={!item.possible}
              onClick={() => {
                item.possible = !item.possible;
                setData((prev) => ({
                  ...prev,
                  Hour: item.hour + ":00",
                }));
              }}
            >
              {item.hour + ":00"}
            </button>
          </div>
        );
      })}
    </div>
  );
};
