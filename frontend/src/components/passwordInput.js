import { useState } from "react";
import { MdPassword } from "react-icons/md";

const PasswordInput = ({ placeholder, name }) => {
  const [value, setValue] = useState("");

  return (
    <div className="flex items-center space-x-3 bg-gray-200 px-4 py-3 rounded-full w-full text-xl">
      <MdPassword size="1.4em" color="#7F7F7F" />
      <input
        className="bg-gray-200 w-full h-full outline-none"
        type="password"
        name={`${name || "password"}`}
        placeholder={`${placeholder || "Enter Password"}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default PasswordInput;
