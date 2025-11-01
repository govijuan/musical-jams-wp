import { useRef } from "react";

import SliderButon from "../../../images/BotonSlider-short.png";
import SliderRail from "../../../images/slidertocadiscos.png";
import styled from "styled-components";

const StyledSlider = styled.div`
  height: 364.8px;
  width: 89px;
  top: 55vh;
  padding: 25px;
  background-image: url(${SliderRail});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
const StyledSliderRail = styled.div`
  height: 300.8px;
  width: 89px;
`;

const StyledSliderButton = styled.div`
  background-image: url(${SliderButon});
  top: -32px;
  height: 70px;
  width: 89px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const getPercentage = (current, max) => (100 * current) / max;
const getTop = (percentage) => `calc(${percentage}% - 35px)`;

const PlayerSlider = () => {
  const sliderRef = useRef();
  const buttonRef = useRef();
  const diff = useRef();

  const handleMouseMove = (event) => {
    let newY =
      event.clientY -
      diff.current -
      sliderRef.current.getBoundingClientRect().top;

    const end = sliderRef.current.offsetHeight - buttonRef.current.offsetHeight;
    const start = 0;
    if (newY < start) newY = start;
    if (newY > end) newY = end;
    const newPercentage = getPercentage(newY, end);
    console.log("newY:", newY);
    console.log("newPercentage:", newPercentage);
    buttonRef.current.style.top = getTop(newPercentage);
  };

  const handleMouseUp = () => {
    document.removeEventListener("mouseup", handleMouseUp);
    document.removeEventListener("mousemove", handleMouseMove);
  };

  const handleMouseDown = (event) => {
    diff.current =
      event.clientY - buttonRef.current.getBoundingClientRect().top;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <StyledSlider className="position-absolute d-flex flex-column justify-content-center align-items-center">
      <StyledSliderRail ref={sliderRef} className="position-relative">
        <StyledSliderButton
          className="position-relative"
          onMouseDown={handleMouseDown}
          ref={buttonRef}
        />
      </StyledSliderRail>
    </StyledSlider>
  );
};

export default PlayerSlider;
