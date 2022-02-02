import {  useState } from "react";
import GetStartedPresentation from "./getStartedPresentation";
import { DateTime } from "luxon";
import { useNavigate } from "react-router-dom";


const GetStarted = () => {
  const [slideCount, setSlideCount] = useState(3);
  const [currentSlide, setCurrentSlide] = useState(0);
  const Navigate = useNavigate()

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    day: "",
    month: "",
    year: "",
    country: "",
    city: "",
  });
  const countries = ["Argentina", "Ethophia", "United Kingdom"];
  const cities =  ["London", "Paris", "Rome", "Vienna"]


  const [formError, setFormError] = useState({
    firstName: "",
    lastName: "",
    day: "",
    month: "",
    year: "",
    country: "",
    city: "",
    dateString: "",
  });

  const CheckIfError = (fields, tempErrors) => {
    fields.forEach((field) => {
      if (tempErrors[field]) {
        return false;
      }
      return true;
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const SelectDropdownItem = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  const SetActiveSlide = (index) => {
    setCurrentSlide(index);
  };


  const SubmitForm = () => {
    
  };
  
  const CheckForRequired = (fields) => {
    let errorFound = false;
    let tempErrors = {
      firstName: "",
      lastName: "",
      day: "",
      month: "",
      year: "",
      country: "",
      city: "",
      dateString: "",
    };
    fields.forEach((field) => {
      if (form[field] === "") {
        tempErrors = { ...tempErrors, [field]: "Required" };
        errorFound = true;
      }
    });
    setFormError(tempErrors);
    return errorFound;
  };

  const CheckDateString = () => {
    const emptyForm = {
      firstName: "",
      lastName: "",
      day: "",
      month: "",
      year: "",
      country: "",
      city: "",
      dateString: "",
    };
    const dateString = `${form.month} ${form.day} ${form.year}`;

    const invalid = DateTime.fromFormat(dateString, "LLLL dd yyyy").invalid;
    if (invalid) {
      setFormError({ ...emptyForm, dateString: "Please enter a valid date" });
      return true;
    }
    return false;
  };

  const CheckIfEighteen = () => {
    const emptyForm = {
      firstName: "",
      lastName: "",
      day: "",
      month: "",
      year: "",
      country: "",
      city: "",
      dateString: "",
    };
    const dateString = `${form.month} ${form.day} ${form.year}`;
    const dob = DateTime.fromFormat(dateString, "LLLL dd yyyy");
    const today = DateTime.now();
    if (today.minus({ years: 18 }) < dob) {
      setFormError({ ...emptyForm, dateString: "Must be over 18" });
      return true;
    }
    return false;
  };

  const ValidateDate = async () => {
    setFormError({
      firstName: "",
      lastName: "",
      day: "",
      month: "",
      year: "",
      country: "",
      city: "",
      dateString: "",
    });
    const fields = ["day", "month", "year"];
    if (CheckForRequired(fields)) {
      return;
    }
    if (CheckDateString()) {
      return;
    }
    if (CheckIfEighteen()) {
      return;
    }
    GoNextSlide();
    return;
  };

  const ValidateName = () => {
    const fields = ["firstName", "lastName"];
    if (CheckForRequired(fields)) {
      return;
    }
    GoNextSlide();
    return;
  };

  const ValidateLocation = () => {
    const fields = ["country", "city"];
    if (CheckForRequired(fields)) {
      return;
    }
    GoNextSlide();
    return;
  };

  const FinalValidationCheck = () => {
    setFormError({
      firstName: "",
      lastName: "",
      day: "",
      month: "",
      year: "",
      country: "",
      city: "",
      dateString: "",
    });
    let fields = ["firstName", "lastName"];
    if (CheckForRequired(fields)) {
      setCurrentSlide(0)
      console.log(`required: ${fields}`)
      return false;
    }
    fields = ["day", "month", "year"];
    if (CheckForRequired(fields)) {
      setCurrentSlide(1)
      return false;
    }
    if (CheckDateString()) {
      setCurrentSlide(1)
      return false;
    }
    if (CheckIfEighteen()) {
      setCurrentSlide(1)
      return false;
    }
    fields = ["country", "city"];
    if (CheckForRequired(fields)) {
      setCurrentSlide(2)
      return false;
    }
    return true
  }

  const GoNextSlide = () => {
    if (currentSlide + 1 === slideCount) {
      if(FinalValidationCheck()){
        SubmitForm();
        Navigate("/home")
      }
      return;
    }
    SetActiveSlide(currentSlide + 1);
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
    "February",
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




  let currentYear = DateTime.now().year;

  const years = [];

  for (let i = 0; i < 120; i++) {
    years.push(currentYear);
    currentYear--;
  }

  return (
    <GetStartedPresentation
      currentSlide={currentSlide}
      form={form}
      errorForm={formError}
      handleChange={handleChange}
      days={days}
      months={months}
      years={years}
      countries={countries}
      cities={cities}
      SelectDropdownItem={SelectDropdownItem}
      slideCount={slideCount}
      SetActiveSlide={SetActiveSlide}
      GoNextSlide={GoNextSlide}
      ValidateDate={ValidateDate}
      ValidateName={ValidateName}
      ValidateLocation={ValidateLocation}
    />
  );
};

export default GetStarted;
