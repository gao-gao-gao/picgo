import React from "react";
import ReactDOM from "react-dom";
import GetHeader from "./js/main";
import "./less/normalize.less";
import "./less/variable.less";
import "./less/index.less";
import "./less/login.less";
import "./less/header.less";
import "./less/jump.less";
import "./less/myPage.less";

// const APP = () => {
//   const [color, setColor] = useState("red");
//   return (
//     <>
//       {/* <GetHeader /> */}
//       <div style={{ color }}>文字</div>
//       <br />
//       <button
//         onClick={() => {
//           setColor("pink");
//         }}
//       >
//         改变颜色
//       </button>
//     </>
//   );
// };
const APP = () => {
  return <GetHeader />;
};
ReactDOM.render(<APP />, document.getElementById("root"));
