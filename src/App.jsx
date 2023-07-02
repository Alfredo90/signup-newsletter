import Heading from "./components/Heading/Heading";
import { data } from "./Data";
console.log(data);
function App() {
  return (
    <div className=" h-screen w-screen bg-slate-300 font-primary ">
      <Heading data={data} />
    </div>
  );
}

export default App;
