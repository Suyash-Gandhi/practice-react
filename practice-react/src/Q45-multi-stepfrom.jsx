import React from 'react'
import { useState } from 'react';

function Q45multistepfrom() {
  const [step, setstep] = useState(1);
  const [formdata, setformdata] = useState({
    name: "",
    email: "",
    age: ""
  });
  const [errors, seterrors] = useState({});

  const nextstep = () => setstep((prev) => prev + 1);
  const prevstep = () => setstep((prev) => prev - 1);

  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
    seterrors({ ...errors, [e.target.name]: "" });
  };

  const validatestep = () => {
    const newerrors = {};
    if (step === 1 && !formdata.name.trim()) {
      newerrors.name = "Name is required";
    }
    if (step === 2 && !/\S+@\S+\.\S+/.test(formdata.email)) {
      newerrors.email = "Valid email required";
    }
    if (
      step === 3 &&
      (!formdata.age || isNaN(formdata.age) || formdata.age <= 0)
    ) {
      newerrors.age = "Valid age required";
    }
    if (step === 4) {
      return <><p ><strong>Review:</strong></p>
      </>
    }

    seterrors(newerrors);
    return Object.keys(newerrors).length === 0;
  };

  const handleNext = () => {
    if (validatestep()) nextstep();
  };

  return (
    <div >
      <h2>step {step} of 4</h2>

      {step === 1 && (
        <>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formdata.name}
            onChange={handlechange}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
        </>
      )}

      {step === 2 && (
        <>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formdata.email}
            onChange={handlechange}
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </>
      )}

      {step === 3 && (
        <>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formdata.age}
            onChange={handlechange}
          />
          {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}


        </>
      )}
      {
        step === 4 && (
          <>
            <label>Review:</label>
            <ul>
              <li>Name: {formdata.name}</li>
              <li>Email: {formdata.email}</li>
              <li>Age: {formdata.age}</li>
            </ul>
          </>
        )
      }

      <div>
        {step > 1 && <button onClick={prevstep}>Previous</button>}
        {step < 4 ? (
          <button onClick={handleNext} >
            Next
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Q45multistepfrom