import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpCase = () => {
    let newText = Text.toUpperCase();
    setText(newText);
  };
  const handleLoCase = () => {
    let newText = Text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [Text, setText] = useState("enter here...");

  return (
    <div>
      <div className="container mb-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="mybox" className="form-label">
            Example textarea
          </label>
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            value={Text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleUpCase}
        >
          Convert to uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={handleLoCase}
        >
          Convert to lowercase
        </button>
      </div>
      <div className="container my-3">
        <h1>your text sumamary</h1>
        <p>
          {" "}
          {Text.split(" ").length} of words and its length{Text.length}
        </p>
      </div>
    </div>
  );
}

// import React, { useState } from "react";

// export default function TextForm(props) {
//   const handleUpClick = () => {
//     // console.log("handle is called");
//     let newText = Text.toUpperCase();
//     setText(newText);
//   };

//   const handleOnChange = (e) => {
//     //console.log("handle on change is called");
//     setText(e.target.value);
//   };
//   const [Text, setText] = useState("enter text here");
//   //Text="new text here"//wrong way to change the state

//   //   const [Text, SeTtext] = useState("set text here");

//   return (
//     <div>
//       <h1>{props.heading}</h1>
//       <div className="mb-3">
//         <label htmlFor="mybox" className="form-label">
//           Example textarea
//         </label>
//         <textarea
//           className="form-control"
//           id="mybox"
//           value={Text}
//           rows="8"
//           onChange={handleOnChange}
//         ></textarea>
//       </div>
//       <button type="button" className="btn btn-primary" onClick={handleUpClick}>
//         Convert to uppercase
//       </button>
//     </div>
//   );
// }
