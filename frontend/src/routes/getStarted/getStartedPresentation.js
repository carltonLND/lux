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
  countries,
  cities,
  SelectDropdownItem,
  slideCount,
  SetActiveSlide,
  ValidateLocation,
  ValidateDate,
  errorForm,
  ValidateName,
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
              errorMsg={errorForm.firstName}
              name="firstName"
              type="text"
              placeholder="First Name"
              onChange={handleChange}
              value={form.firstName}
            />

            <TextInput
              name="lastName"
              type="text"
              errorMsg={errorForm.lastName}
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
                errorMsg={errorForm.day}
                placeholder="Day"
                items={days}
                SelectDropdownItem={SelectDropdownItem}
                value={form.day}
              />
              <Dropdown
                name="month"
                errorMsg={errorForm.month}
                placeholder="Month"
                items={months}
                SelectDropdownItem={SelectDropdownItem}
                value={form.month}
              />
            </div>
            <Dropdown
              name="year"
              errorMsg={errorForm.year}
              placeholder="Year"
              items={years}
              SelectDropdownItem={SelectDropdownItem}
              value={form.year}
            />
            <p
              className={`${
                errorForm.dateString ? "inline" : "hidden"
              } mt-1 ml-5 text-red-500 font-nunito tracking-wider text-md`}
            >
              {errorForm.dateString}
            </p>
          </GetStartedContainer>
        )}

        {currentSlide === 2 && (
          <GetStartedContainer title="Location" key="31">
            <Dropdown
              name="country"
              errorMsg={errorForm.country}
              placeholder="Country"
              items={countries}
              loading={false}
              SelectDropdownItem={SelectDropdownItem}
              value={form.country}
            />
            <Dropdown
              name="city"
              errorMsg={errorForm.city}
              placeholder="City"
              items={cities}
              loading={false}
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

      {currentSlide === 0 && (
        <Button
          text="Next"
          color="secondary"
          type="border"
          onClick={ValidateName}
        />
      )}
      {currentSlide === 1 && (
        <Button
          text="Next"
          color="secondary"
          type="border"
          onClick={ValidateDate}
        />
      )}
      {currentSlide === 2 && (
        <Button
          text="Next"
          color="secondary"
          type="border"
          onClick={ValidateLocation}
        />
      )}
    </div>
  );
};

export default GetStartedPresentation;
