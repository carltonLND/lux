import { useState } from "react";
import {
  Logo,
  GetStartedContainer,
  TextInput,
  Button,
  SliderEllipses,
} from "../../components";

const GetStarted = () => {
  const [slideCount, setSlideCount] = useState(3);
  const [currentSlide, setCurrentSlide] = useState(2);

  const SetActiveSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-screen h-screen overscroll-none bg-primary flex flex-col items-center p-10 space-y-10">
      <div>
        <Logo width="10" />
      </div>
      <h1 className="text-white text-center text-3xl font-open font-extrabold">
        Get Started
      </h1>
      <GetStartedContainer title="Name">
        <TextInput name="firstName" placeholder="First Name" />
        <TextInput name="firstName" placeholder="Last Name" />
      </GetStartedContainer>
      <SliderEllipses
        count={slideCount}
        current={currentSlide}
        SetActiveSlide={SetActiveSlide}
      />
      <Button text="Next" color="secondary" type="border" />
    </div>
  );
};

export default GetStarted;
