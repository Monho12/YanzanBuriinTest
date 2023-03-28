import "./App.css";
import { auth } from "./firebase.config";
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

function App() {
  const [otp, setOtp] = useState("");
  const [number, setNumber] = useState("");

  const onCaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: (response) => {
            onSignUp();
          },
          "expired-callback": () => {
            console.log("gg");
          },
        },
        auth
      );
    }
  };

  const onSignUp = () => {
    onCaptcha();
    const appVerifier = window.recaptchaVerifier;
    const phoneNumber = "+" + number;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log("otp successfully sent!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onOTPVerify = () => {
    window.confirmationResult
      .confirm(otp)
      .then(async (res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <div id="recaptcha-container" />
      <div className="otp">
        <div className="otpcontainer">
          <h2>Enter ur phone number</h2>
          <PhoneInput country={"mn"} value={number} onChange={setNumber} />
          <button onClick={onSignUp}>send</button>
        </div>
      </div>
      <div className="otp">
        <div className="otpcontainer">
          <h2>Enter ur OTP</h2>
          <OtpInput
            OTPLength={6}
            otpType="number"
            disabled={false}
            // autoFocus
            value={otp}
            onChange={setOtp}
          />
          <button onClick={onOTPVerify}>verify otp</button>
        </div>
      </div>
    </div>
  );
}

export default App;
