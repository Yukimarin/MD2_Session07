import React from "react";
import { useParams } from "react-router-dom";

function CourseDetailByType() {
  const param = useParams();
  console.log(param);
  return (
    <div>
      Khóa học Java có id là:{param.id} - Tiêu đề khóa học:{param.type}
    </div>
  );
}

export default CourseDetailByType;
