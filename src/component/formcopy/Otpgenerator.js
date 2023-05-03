import React, { useState } from "react";

const Otpgenerator = () => {
  const [mobile, setMobile] = useState(" ");

  const postData = () => {
    const isValidNumber = /^[789]\d{9}$/.test(mobile);
    if (!isValidNumber) {
      alert("Invalid mobile number");
      return;
    }

    const body = { mobile: Number(mobile) };

    const url = "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) =>
      response.json().then((result) => {
        if (response.ok) {
          alert("OTP Sent successfully");
          setMobile("");
        } else {
          alert("Error", result);
        }
      })
    );
  };
  return (
    <div>
      <input
        type="text"
        value={mobile}
        placeholder="Enter Your Mobile Number"
        onChange={(e) => setMobile(e.target.value)}
      />
      <button onClick={postData}>Send OTP</button>
    </div>
  );
};
export default Otpgenerator;
