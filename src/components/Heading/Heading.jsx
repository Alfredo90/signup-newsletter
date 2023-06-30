import { checkList } from "../../Checklist";

const Heading = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <h1 className=" text-5xl font-bold ">Stay updated!</h1>
      <h2 className=" text-base">
        Join 60,0000+ product managers receiving monthly updates on:
      </h2>
      <ul>
        {checkList.map(({ id, src, title }) => (
          <li
            key={id}
            className=" list-none flex flex-row justify-start items-center gap-4"
          >
            <img src={src} alt={src} className="w-5 h-5" />
            <h2 className="text-base">{title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Heading;
