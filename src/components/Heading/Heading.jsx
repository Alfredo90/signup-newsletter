import Form from "../Form/Form";

const Heading = ({ data }) => {
  return (
    <div className="flex flex-col justify-center rounded-xl items-center gap-5 border-1 border-black shadow-lg w-1/3  h-1/2 ">
      <h1 className=" text-5xl font-bold ">Stay updated!</h1>
      <h2 className=" text-base">
        Join 60,0000+ product managers receiving monthly updates on:
      </h2>
      <ul>
        {data.map(({ id, src, title }) => (
          <li
            key={id}
            className=" list-none flex flex-row justify-start items-center gap-4"
          >
            <img src={src} className="w-5 h-5" />
            <h2 className="text-base">{title}</h2>
          </li>
        ))}
      </ul>
      <Form data={data} />
    </div>
  );
};

export default Heading;
