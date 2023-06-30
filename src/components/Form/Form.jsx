const Form = () => {
  return (
    <div className=" border-2 ">
      <form className="flex">
        <label htmlFor="email">Email</label>
        <input type="text" />
        <button type="submit">Subscribe to monthly newsletter</button>
      </form>
    </div>
  );
};

export default Form;
