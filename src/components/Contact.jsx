import React from "react";
import { Outlet } from "react-router-dom";
function Contact() {
  return (
    <div>
      Đây là Contact Header
      {/* Outlet xác định vị trí hiển thị component con khi route trùng khớp */}
      <Outlet />
      Đây là Contact Footer
    </div>
  );
}

export default Contact;
