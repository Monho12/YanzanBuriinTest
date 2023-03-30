import { createContext, useState } from "react";

export const DataContext = createContext();

const doctorsData = [
  {
    name: "Enkhtuvshin",
    inpossibleTimes: [12, 18, 20],
  },
  {
    name: "Duurenbayar",
    inpossibleTimes: [{ time: 15 }, { time: 10 }, { time: 13 }],
  },
  {
    name: "Justin Bieber",
    inpossibleTimes: [{ time: 11 }, { time: 12 }],
  },
  {
    name: "Andrew Tate",
    inpossibleTimes: [{ time: 13 }, { time: 16 }, { time: 19 }],
  },
  {
    name: "Mnholovesnobody",
    inpossibleTimes: [{ time: 12 }, { time: 18 }],
  },
];

export const DataProvider = (props) => {
  const [data, setData] = useState({
    Date: null,
    Hour: null,
    Doctor: null,
    phoneNumber: null,
  });

  return (
    <DataContext.Provider value={{ data, setData, doctorsData }}>
      {props.children}
    </DataContext.Provider>
  );
};
