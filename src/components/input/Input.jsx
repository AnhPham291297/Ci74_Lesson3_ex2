import React from "react";
import "./Input.css";

const Input = ({ label }) => {
  return (
    <div className="input">
      <input type="text" placeholder={label} />
    </div>
  );
};

// const Input = (props) => {
//   return (
//     <div className="input">
//       <input type="text" placeholder={props.label} />
//     </div>
//   );
// };

export default Input;
