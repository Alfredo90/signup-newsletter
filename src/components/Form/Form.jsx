import { useState } from "react";
import Success from "../Success/Success";

const Form = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [required, setRequired] = useState(true);
  // let regex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("valid", email);
  };

  return (
    <>
      {!isValid ? (
        <form
          className="flex flex-col justify-center items-center "
          onSubmit={handleSubmit}
        >
          <label htmlFor="emails" className="text-sm">
            Email address
          </label>
          <input
            required={required}
            aria-label="Email field"
            name="emails"
            className="text-base"
            type="email"
            value={email}
            onChange={handleChange}
          />
          <button type="submit" disabled={email === ""}>
            Subscribe to monthly newsletter
          </button>
        </form>
      ) : (
        <Success email={email} />
      )}
    </>
  );
};

export default Form;
