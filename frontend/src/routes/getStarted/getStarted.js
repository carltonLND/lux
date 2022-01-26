import { useState } from "react";
import {
  Logo,
  GetStartedContainer,
  TextInput,
  Button,
  SliderEllipses,
  Dropdown,
} from "../../components";
import { useFormik } from "formik";
import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

const GetStarted = () => {
  const [slideCount, setSlideCount] = useState(3);
  const [currentSlide, setCurrentSlide] = useState(2);

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
    if (currentSlide + 1 == slideCount) {
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
    <div className="w-screen h-screen overscroll-none bg-primary flex flex-col items-center p-10 space-y-10">
      <div>
        <Logo width="10" />
      </div>
      <h1 className="text-white text-center text-3xl font-open font-extrabold">
        Get Started
      </h1>

      {currentSlide == 0 && (
        <GetStartedContainer title="Name">
          <TextInput
            name="firstName"
            placeholder="First Name"
            onChange={handleChange}
            value={form.firstName}
            errorMsg={form.firstName}
          />

          <TextInput
            name="lastName"
            placeholder="Last Name"
            onChange={handleChange}
            value={form.lastName}
            errorMsg={form.lastName}
          />
        </GetStartedContainer>
      )}

      {currentSlide == 1 && (
        <GetStartedContainer title="Age">
          <div className="flex w-full space-x-2">
            <Dropdown
              name="day"
              placeholder="Day"
              items={days}
              SelectDropdownItem={SelectDropdownItem}
              value={form.day}
              errorMsg={form.day}
            />
            <Dropdown
              name="month"
              placeholder="Month"
              items={months}
              SelectDropdownItem={SelectDropdownItem}
              value={form.month}
              errorMsg={form.month}
            />
          </div>
          <Dropdown
            name="year"
            placeholder="Year"
            items={years}
            SelectDropdownItem={SelectDropdownItem}
            value={form.year}
            errorMsg={form.year}
          />
        </GetStartedContainer>
      )}

      {currentSlide == 2 && (
        <GetStartedContainer title="Location">
          <Dropdown
            name="country"
            placeholder="Country"
            items={months}
            SelectDropdownItem={SelectDropdownItem}
            value={form.country}
            errorMsg={form.country}
          />
          <Dropdown
            name="city"
            placeholder="City"
            items={months}
            SelectDropdownItem={SelectDropdownItem}
            value={form.city}
            errorMsg={form.city}
          />
        </GetStartedContainer>
      )}
      <SliderEllipses
        count={slideCount}
        current={currentSlide}
        SetActiveSlide={SetActiveSlide}
      />
      <Button
        text="Next"
        color="secondary"
        type="border"
        onClick={GoNextSlide}
      />
    </div>
  );
};

export default GetStarted;
