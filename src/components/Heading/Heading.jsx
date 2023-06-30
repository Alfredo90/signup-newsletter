import { checkList } from "../../Checklist";

const Heading = () => {
  return (
    <div className="">
      <h1>Stay updated!</h1>
      <h4>Join 60,0000+ product managers receiving monthly updates on:</h4>
      <ul>
        {checkList.map(({ id, src, title }) => (
          <li key={id}>
            <img src={src} alt="" />
            <span>{title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Heading;
