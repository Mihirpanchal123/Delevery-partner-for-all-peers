import React, { Component,useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";
import  InfoCard from './InfoCard'
// import "./styles.css";


const OTP=()=> {
    const [OTP, setOTP] = useState(""); 
    return (
      <>

        <div className="h-screen w-screen">
            <div className="flex mt-28 mx-auto flex-col w-1/2 bg-gray-600 items-center justify-center mb-12">
                <h1 className="text-5xl mb-8  font-bold leading-normal mt-0 mb-2  text-white text-center">Enter OTP Here</h1>
                <span className="text-gray-100 mb-4 text-center text-2xl font-bold"> +91 9658547474</span>
                <div className="text-black mb-12">
                    <OTPInput className=" mb-4" value={OTP} onChange={setOTP} autoFocus OTPLength={4} otpType="number" disabled={false}  />
                    <ResendOTP onResendClick={() => console.log("Resend clicked")} />
                </div>
            </div>
            <InfoCard />
        </div>


    </>
  );
}


export default OTP;