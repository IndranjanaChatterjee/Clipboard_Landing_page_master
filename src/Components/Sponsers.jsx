import React from 'react'
import google from "../assets/images/logo-google.png";
import ibm from "../assets/images/logo-ibm.png";
import microsoft from "../assets/images/logo-microsoft.png";
import hp from "../assets/images/logo-hp.png";
import vector from "../assets/images/logo-vector-graphics.png";

export default function Sponsers() {
  return (
    <div className="flex justify-center items-center flex-wrap gap-28 w-full mt-20">
      <img src={google} alt="google" />
      <img src={ibm} alt="ibm" />
      <img src={microsoft} alt="microsoft" />
      <img src={hp} alt="hp" />
      <img src={vector} alt="vector" />
    </div>
  )
}
