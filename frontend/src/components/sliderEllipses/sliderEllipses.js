import { useEffect, useState } from "react";
import Ellipse from "./ellipse";

const SliderEllipses = ({ count, current, SetActiveSlide }) => {
  const [Ellipses, setEllipses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    CreateEllipses(count);
  }, []);

  useEffect(() => {
    if (!loading) {
      ChangeActiveEllipse(current);
    }
  }, [current, loading]);

  const CreateEllipses = async (count) => {
    const newEllipses = [{ state: true, index: 0 }];
    for (let i = 0; i < count - 1; i++) {
      newEllipses.push({ state: false, index: i + 1 });
    }
    setEllipses([...newEllipses]);
    setLoading(false);
  };

  const ChangeActiveEllipse = (index) => {
    setEllipses([
      ...Ellipses.map((ellipse) => {
        if (ellipse.index === index) {
          return { ...ellipse, state: true };
        }
        return { ...ellipse, state: false };
      }),
    ]);
  };

  return (
    <div className="flex space-x-1">
      {Ellipses.map((ellipse) => {
        return (
          <Ellipse
            active={ellipse.state}
            index={ellipse.index}
            SetActiveSlide={() => {
              SetActiveSlide(ellipse.index);
            }}
          />
        );
      })}
    </div>
  );
};

export default SliderEllipses;
