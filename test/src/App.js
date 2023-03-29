import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { OTP } from "./pages/OTP";

function App() {
  <BrowserRouter>
    <Routes>
      <Route path="/otp" element={<OTP />} />
    </Routes>
  </BrowserRouter>;
}

export default App;
