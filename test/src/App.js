import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { OTP } from "./pages/OTP";
import { Landing } from "./pages/Landing";
import { CalendarComp } from "./pages/calendar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/otp" element={<OTP />} />
        <Route path="/calendar" element={<CalendarComp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
