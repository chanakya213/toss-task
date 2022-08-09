import React from "react";
import { useMemo } from "react";
// import { useEffect } from "react";

export default function HeadandTail() {
  const [value, setValue] = React.useState("");
  const [todos, setToss] = React.useState([]);

  const addtoss = () => {
    setToss((t) => [...t, value]);
    console.log(todos);
    setValue("");
  };

  return (
    <div className="p-5">
      <div className="p-5">
        <label>Head and Tail : </label>
        <select value={value} onChange={(e) => setValue(e.target.value)}>
          <option value="" disabled>
            Select value
          </option>
          <option value="h">H</option>
          <option value="t">T</option>
        </select>
      </div>
      <div>
        <button
          className="btn btn-warning px-5 mx-5"
          disabled={value === ""}
          onClick={addtoss}
        >
          Submit
        </button>
      </div>
      <div className="p-5">
        {todos.map((i, index) => {
          if (i !== todos[index - 1]) {
            return (
              <>
                <br />
                <span style={{ color: "blue", fontSize: "1.3rem" }}>{i}</span>
              </>
            );
          } else {
            return (
              <>
                {" "}
                <span style={{ color: "blue", fontSize: "1.3rem" }}>{i}</span>
              </>
            );
          }
        })}
      </div>
      {/* <div class="container">
        <div className="row">
          {todos.map((i, index) => {
            if (i !== todos[index - 1]) {
              return <div class="col">{i}</div>;
            }
            else {
              return <span class="row">{i}</span>;
            }
          })}
        </div>
      </div> */}
    </div>
  );
}
