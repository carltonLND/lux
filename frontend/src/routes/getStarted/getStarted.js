import { useState } from "react";
import GetStartedPresentation from "./getStartedPresentation";

const GetStarted = () => {
  const [slideCount, setSlideCount] = useState(3);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    day: "",
    month: "",
    year: "",
    country: "",
    city: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const SelectDropdownItem = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const SetActiveSlide = (index) => {
    setCurrentSlide(index);
  };

  const GoNextSlide = () => {
    if (currentSlide + 1 === slideCount) {
      SubmitForm();
      return;
    }
    SetActiveSlide(currentSlide + 1);
  };

  const SubmitForm = () => {
    setCurrentSlide(0);
  };

  const days = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
  ];

  const months = [
    "January",
    "Febuary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let currentYear = 2021;

  const years = [];

  for (let i = 0; i < 120; i++) {
    years.push(currentYear);
    currentYear--;
  }

  return (
    <GetStartedPresentation
      currentSlide={currentSlide}
      form={form}
      handleChange={handleChange}
      days={days}
      months={months}
      years={years}
      SelectDropdownItem={SelectDropdownItem}
      slideCount={slideCount}
      SetActiveSlide={SetActiveSlide}
      GoNextSlide={GoNextSlide}
    />
  );
};

export default GetStarted;
