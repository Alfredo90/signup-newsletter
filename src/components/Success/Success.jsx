import React from "react";

const Success = ({ email }) => {
  return (
    <section className="flex flex-col justify-center items-center h-96 w-96 ">
      {/* <img className="w-5 h-5" src={checkMark} /> */}
      <h1>Thanks for subscribing!</h1>
      <p>
        A conformation email has been sent to <strong>{email}</strong>. Please
        open it and click the button inside to conform your subscription.
      </p>
      <button>Dismiss message</button>
    </section>
  );
};

export default Success;
