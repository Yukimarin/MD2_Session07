import React from "react";
import { useSearchParams } from "react-router-dom";

function Course() {
  const [searchParam, setSearchParam] = useSearchParams();

  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Khóa học</th>
            <th>Giá</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Java</td>
            <td>1000</td>
            <td>
              <button
                onClick={() => setSearchParam({ Course: "Java", Price: 1000 })}
              >
                Chi tiết
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Javascript</td>
            <td>1500</td>
            <td>
              <button
                onClick={() =>
                  setSearchParam({ Course: "Javascript", Price: 1500 })
                }
              >
                Chi tiết
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <h1>Chi tiết khóa học</h1>
      <p>Khóa học:{searchParam.get("Course")}</p>
      <p>Giá tiền:{searchParam.get("Price")}</p>
    </div>
  );
}

export default Course;
