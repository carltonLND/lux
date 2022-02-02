const Ellipse = ({ active, SetActiveSlide }) => {
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
