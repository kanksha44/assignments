import React, { useState } from "react";
import axios from "axios";

const OtpGenerator = () => {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const postData = async () => {
    const isValidNumber = /^[789]\d{9}$/.test(mobile);
    if (!isValidNumber) {
      setError("Invalid mobile number");
      return;
    }

    const body = { mobile: Number(mobile) };

    const url = "https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP";

    try {
      const response = await axios.post(url, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setMessage("OTP Sent Successfully");
      } else {
        setMessage("Error: Something went wrong");
        setError(""); // Clear the error message
      }
    } catch (error) {
      setMessage("Error: " + error.message);
      setError(""); // Clear the error message
    }
  };

  return (
    <div>
      <input
        type="text"
        value={mobile}
        placeholder="Enter Your Mobile Number"
        onChange={(e) => setMobile(e.target.value)}
      />
      <button onClick={postData}>Get OTP</button>
      {error && <p>{error}</p>}
      {message && <p>{message}</p>}
    </div>
  );
};

export default OtpGenerator;
