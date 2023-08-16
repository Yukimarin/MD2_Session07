import React from "react";
import { useLocation } from "react-router-dom";

function About() {
  // Sử dụng useLocation để nhận được dữ liệu từ navigate
  const data = useLocation();
  console.log(data);
  return <div>Đây là About</div>;
}

export default About;
