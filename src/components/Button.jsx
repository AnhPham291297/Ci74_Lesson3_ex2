import React from "react";

// const Button = (props) => {
//   return (
//     <div className="button">
//       <button>{props.title}</button>
//     </div>
//   );
// };

const Button = ({ title }) => {
  return (
    <div className="button">
      <button>{title}</button>
    </div>
  );
};

export default Button;
