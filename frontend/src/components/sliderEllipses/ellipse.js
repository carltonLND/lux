import { useState } from "react";

const Ellipse = ({ active, SetActiveSlide }) => {
  const [state, setState] = useState(active);

  return (
    <div
      onClick={SetActiveSlide}
      className={`rounded-full shadow-sm w-4 h-4 ${
        active ? "bg-secondary" : "bg-gray-300"
      }`}
    ></div>
  );
};

export default Ellipse;
