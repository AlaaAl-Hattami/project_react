import Modal from "./Modal";
import { useState } from "react";
export default function Project() {
  const [one, settwo] = useState(null);
  const [onemodal, setmodal] = useState(false);
  const [input, setvalue] = useState({
    name: "",
    phone: "",
    age: "",
    isone: false,
    salary: "",
  });

  function fun(event) {
    event.preventDefault();
    settwo(null);
    const { age, phone } = input;
    if (age < 18 || age > 100) {
      settwo("العمر اللي ادخلته ربما قد يكون غير مناسب ");
    } else if (phone.length < 9 || phone.length > 9) {
      settwo("الرقم غير صحيح يرجي التاكد");
    }
    setmodal(true);
  }
  const btn = input.name == "" || input.age == "" || input.phone == "";

  function Funtwo() {
    if (onemodal) {
      setmodal(false);
    }
  }

  return (
    <div onClick={Funtwo} className="flex" style={{ flexDirection: "column" }}>
      <form className="flex" id="form" style={{ flexDirection: "column" }}>
        <h1>Requesting Alone</h1>
        <hr></hr>
        <label>Nmae:</label>
        <input
          value={input.name}
          onChange={(event) => {
            setvalue({ ...input, name: event.target.value });
          }}
        />
        <label>Phone number:</label>
        <input
          value={input.phone}
          onChange={(event) => {
            setvalue({ ...input, phone: event.target.value });
          }}
        />
        <label>Age:</label>
        <input
          checked={input.age}
          onChange={(event) => {
            setvalue({ ...input, age: event.target.value });
          }}
        />

        <label style={{ marginTop: "20px" }}>ARE YOU EMPLOYEE:</label>
        <input
          type="checkbox"
          value={input.isone}
          onChange={(event) => {
            setvalue({ ...input, isone: event.target.checked });
          }}
          style={{ height: "30px" }}
        />
        <label>Salary:</label>
        <select
          value={input.salary}
          onChange={(event) => {
            setvalue({ ...input, salary: event.target.value });
          }}
        >
          <option>yemen</option>
          <option>sudiArbi</option>
          <option>kwuite</option>
        </select>
        <button
          className={btn ? "DIS" : ""}
          id="butto"
          onClick={fun}
          disabled={btn}
        >
          Submit
        </button>
      </form>
      <Modal y={one} x={onemodal} />
    </div>
  );
}
