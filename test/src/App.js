import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { OTP } from "./pages/OTP";
import { Landing } from "./pages/Landing";
import { DataProvider } from "./contexts/DataProvider";
import { CalendarComp } from "./components/calendarComp";
import { Calendar } from "./pages/calendar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <DataProvider>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/otp" element={<OTP />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </DataProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
