import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Dropdown = ({
  errorMsg,
  name,
  value,
  onChange,
  placeholder,
  items,
  SelectDropdownItem,
}) => {
  const [active, setActive] = useState(false);

  const ToggleDropdown = () => {
    setActive((prev) => !prev);
  };

  const CloseDropdown = () => {
    setActive(false);
  };

  const changeValue = (newValue) => {
    SelectDropdownItem(name, newValue);
    CloseDropdown();
  };

  return (
    <div className="w-full relative" onMouseLeave={CloseDropdown}>
      <label
        htmlFor="email"
        className={` flex items-center space-x-3 bg-gray-200 px-4 py-3 ${
          active ? "rounded-tl-lg rounded-tr-lg" : "rounded-full"
        } w-full text-xl`}
      >
        <input
          onClick={ToggleDropdown}
          className="bg-gray-200 w-full outline-none cursor-pointer"
          type="text"
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          readOnly
        />
        {active ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </label>
      {active && (
        <ul className="bg-gray-300 max-h-48  overflow-y-scroll w-full absolute bottom--10 left-0 rounded-bl-lg rounded-br-lg flex flex-col pb-1 shadow z-10">
          {items.map((item) => {
            return (
              <li className="  w-full block  font-nunito font-bold text-center hover:bg-gray-400 hover:text-white cursor-pointer">
                <span
                  onClick={() => changeValue(item)}
                  className="w-full h-full p-2 bg-gray-300 block"
                >
                  {item}
                </span>
              </li>
            );
          })}
        </ul>
      )}

      <p
        className={`${
          errorMsg ? "inline" : "hidden"
        } mt-1 ml-5 text-red-500 font-nunito tracking-wider text-md`}
      >
        {errorMsg}
      </p>
    </div>
  );
};

export default Dropdown;
