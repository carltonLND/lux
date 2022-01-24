import { Logo } from "../components";
import ConstructionImg from "../util/images/construction.svg";

const Construction = () => {
  return (
    <div className="bg-primary w-screen h-screen p-10">
      <Logo />
      <div className="mt-10 h-4/6 flex flex-col justify-between">
        <img
          className="self-center"
          src={ConstructionImg}
          alt="building under construction"
        />
        <h1 className="text-white text-5xl sm:text-6xl text-center font-open font-bold self-center sm:justify-self-end">
          Under Construction
        </h1>
      </div>
    </div>
  );
};

export default Construction;
