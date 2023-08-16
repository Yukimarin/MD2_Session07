import React from "react";
import { useParams } from "react-router-dom";
function CourseDetails() {
  // useParam liên quan đến phần API trong PRJ2
  const paramId = useParams();
  console.log(paramId);
  return <div>Khóa học Java có Id là:{paramId.id}</div>;
}

export default CourseDetails;
