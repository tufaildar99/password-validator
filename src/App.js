import { React, useState } from "react";
import validator from "validator";

const App = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Strong Password");
    } else {
      setErrorMessage("Weak Password");
    }
  };

  return (
    <div>
      <h2>Checking Password Strength</h2>
      <sapn>Enter Password</sapn>
      <input type="text" onChange={(e) => validate(e.target.value)} />
      {errorMessage === "" ? null : <h4>{errorMessage}</h4>}
    </div>
  );
};

export default App;
