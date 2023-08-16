import React from "react";
import { useNavigate } from "react-router-dom";
function DemoNavigate() {
  //Để sử dụng navigate cần khai báo
  //useNavigate là 1 hook được cung cấp bởi react-router-dom
  const navigate = useNavigate();
  return (
    <div>
      {/* Sử dụng navigate để chuyển trang tự động sẽ giống thẻ a ở MD1 */}
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        Click go to About
      </button>
      {/* Sử dụng navigate với history */}
      <button onClick={() => navigate(-2)}>Go 2 pages back</button>
      <button onClick={() => navigate(-1)}>Go back</button>
      <button onClick={() => navigate(1)}>Go forward</button>
      <button onClick={() => navigate(2)}>Go 2 pages forward</button>
      {/* Sử dụng navigate với thuộc tính replace=true - không lưu lại lịch sử */}
      <button onClick={() => navigate("/about", { replace: true })}>
        Go to About - not save history
      </button>
      {/* Sử dụng navigate để truyền dữ liệu */}
      <button onClick={() => navigate("/about", { state: { id: 1 } })}>
        Go to About with data
      </button>
    </div>
  );
}

export default DemoNavigate;
