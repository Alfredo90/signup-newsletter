import { useState } from "react";

const Form = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(null);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    <>
      <form
        className="flex flex-col justify-center items-center "
        onSubmit={handleSubmit}
      >
        <label htmlFor="email text-sm">Email</label>
        <input
          name="email"
          placeholder="ash@loremcompany.com"
          className="text-base"
          type="text"
          value={email}
          onChange={handleChange}
        />
        <button type="submit">Subscribe to monthly newsletter</button>
      </form>
    </>
  );
};

export default Form;
