import { useState } from "react";
import Success from "../Success/Success";

const Form = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  let regex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setIsValid(!isValid);
    console.log("valid");
  };

  // const emailValid = !isValid ? <p>Success</p> : <p>not Success</p>;

  return (
    <>
      <form
        className="flex flex-col justify-center items-center "
        onSubmit={handleSubmit}
      >
        <label htmlFor="emails" className="text-sm">
          Email
        </label>
        <input
          required
          id="emails"
          placeholder="ash@loremcompany.com"
          className="text-base"
          type="email"
          value={email}
          onChange={handleChange}
        />
        <button
          type="submit"
          disabled={email === "" && email === isValid ? true : false}
        >
          Subscribe to monthly newsletter
        </button>
      </form>
      <Success />
    </>
  );
};

export default Form;
