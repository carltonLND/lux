import { AnimatePresence } from "framer-motion";
import {
  Logo,
  GetStartedContainer,
  TextInput,
  Button,
  SliderEllipses,
  Dropdown,
} from "../../components";

const GetStartedPresentation = ({
  currentSlide,
  form,
  handleChange,
  days,
  months,
  years,
  SelectDropdownItem,
  slideCount,
  SetActiveSlide,
  GoNextSlide,
}) => {
  return (
    <div className="w-screen h-screen overscroll-none bg-primary flex flex-col items-center p-10 space-y-10">
      <div>
        <Logo width="10" />
      </div>
      <h1 className="text-white text-center text-3xl font-open font-extrabold">
        Get Started
      </h1>
      <AnimatePresence exitBeforeEnter>
        {currentSlide === 0 && (
          <GetStartedContainer title="Name" key="33">
            <TextInput
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
              value={form.firstName}
            />

            <TextInput
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
              value={form.lastName}
            />
          </GetStartedContainer>
        )}

        {currentSlide === 1 && (
          <GetStartedContainer title="Age" key="32">
            <div className="flex w-full space-x-2">
              <Dropdown
                name="day"
                placeholder="Day"
                items={days}
                SelectDropdownItem={SelectDropdownItem}
                value={form.day}
              />
              <Dropdown
                name="month"
                placeholder="Month"
                items={months}
                SelectDropdownItem={SelectDropdownItem}
                value={form.month}
              />
            </div>
            <Dropdown
              name="year"
              placeholder="Year"
              items={years}
              SelectDropdownItem={SelectDropdownItem}
              value={form.year}
            />
          </GetStartedContainer>
        )}

        {currentSlide === 2 && (
          <GetStartedContainer title="Location" key="31">
            <Dropdown
              name="country"
              placeholder="Country"
              items={months}
              SelectDropdownItem={SelectDropdownItem}
              value={form.country}
            />
            <Dropdown
              name="city"
              placeholder="City"
              items={months}
              SelectDropdownItem={SelectDropdownItem}
              value={form.city}
            />
          </GetStartedContainer>
        )}
      </AnimatePresence>

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

export default GetStartedPresentation;
