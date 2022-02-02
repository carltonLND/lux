import { createRef, useRef, useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

const Dropdown = ({
  errorMsg,
  name,
  value,
  onChange,
  placeholder,
  items,
  loading,
  SelectDropdownItem,
}) => {
  const [active, setActive] = useState(false);

  const listItems = useRef({});

  if(items){
    items.forEach((item) => {
      listItems.current = {
        ...listItems.current,
        [item]: listItems.current[item] ?? createRef(),
      };
    });
  }


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

  const findItem = (char) => {
    return items.find((item) => {
      try {
        if (item[0].toLowerCase() == char.toLowerCase()) {
          return item;
        }
      } catch {
        return null;
      }
    });
  };

  const HandleKeyPress = (e) => {
    const item = findItem(e.key);
    if (item) {
      listItems.current[item].current.scrollIntoView({ behavior: "smooth" });
    }
    return;
  };

  const containerVariant = {
    intial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
    },
  };

  const circleVariant = {
    intial: {
      y: "0%",
    },
    animate: {
      y: "100%",
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.2,
        ease: "easeInOut",
      },
    },
    exit: {
      y: "0%",
      opacity: 0,
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {loading ? (
        <div
          className="w-full relative"
          onMouseLeave={CloseDropdown}
          onKeyPress={HandleKeyPress}
        >
          <label
            htmlFor={name}
            className={` flex items-center space-x-3 bg-gray-200 px-4 py-3 rounded-full text-xl`}
          >
            <input
              className="bg-gray-200 w-full outline-none cursor-pointer"
              type="text"
              name={name}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              readOnly
            />

            <motion.ul
              variants={containerVariant}
              intial="intial"
              animate="animate"
              exit="exit"
              className="grow flex space-x-1 pr-5 h-full"
            >
              <motion.li
                variants={circleVariant}
                className="rounded-full w-2 h-2 bg-gray-500"
              >
                {" "}
              </motion.li>
              <motion.li
                variants={circleVariant}
                className="rounded-full w-2 h-2 bg-gray-500"
              >
                {" "}
              </motion.li>
              <motion.li
                variants={circleVariant}
                className="rounded-full w-2 h-2 bg-gray-500"
              >
                {" "}
              </motion.li>
            </motion.ul>
          </label>
        </div>
      ) : (
        <div
          className="w-full relative"
          onMouseLeave={CloseDropdown}
          onKeyPress={HandleKeyPress}
        >
          <label
            onClick={ToggleDropdown}
            htmlFor="email"
            className={` flex items-center space-x-3 bg-gray-200 px-4 py-3 ${
              active ? "rounded-tl-lg rounded-tr-lg" : "rounded-full"
            } w-full text-xl`}
          >
            <input
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
                  <li
                    ref={listItems.current[item]}
                    className="w-full block  font-nunito font-bold text-center  cursor-pointer"
                  >
                    <span
                      onClick={() => changeValue(item)}
                      className="w-full h-full p-2 bg-gray-300 block hover:bg-gray-400 hover:text-white"
                    >
                      {item}
                    </span>
                  </li>
                );
              })}
              <li className="w-full block  font-nunito font-bold text-center  cursor-pointer">
                <span
                  onClick={() => changeValue("Zebra")}
                  className="w-full h-full p-2 bg-gray-300 block hover:bg-gray-400 hover:text-white"
                >
                  {"Zebra"}
                </span>
              </li>
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
      )}
    </AnimatePresence>
  );
};

export default Dropdown;
