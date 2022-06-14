import { ReactNode, useState } from "react";
import styled from "styled-components";
import Arrow from "../../assets/icons/arrow.svg";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SliderWrapper = styled.div`
  display: flex;
  gap: 16px;
  overflow: hidden;
`;

const Button = styled.div`
  position: absolute;
  top: 50%;
  ${(props: { disabled: boolean; left?: boolean }) =>
    props.left ? "left: 0" : "right: -56px"};
  display: ${(props: { disabled: boolean; left?: boolean }) =>
    props.disabled ? "none" : "flex"};
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  background: #ffffff;
  box-shadow: 0px 12px 12px rgba(0, 0, 0, 0.12);
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;
const LeftArrow = styled.div`
width: 12px;
  height: 8px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props: { image: string }) => props.image});
  transform: rotate(90deg);
`;
const RightArrow = styled.div`
  width: 12px;
  height: 8px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props: { image: string }) => props.image});
  transform: rotate(270deg);
`;

type SliderProps = {
  children: ReactNode[];
  howToShow: number;
};

const Slider = (props: SliderProps) => {
  const { children, howToShow } = props;
  const [indexShow, setIndexShow] = useState(howToShow);

  return (
    <Wrapper>
      <Button
        left
        onClick={() => {
          setIndexShow(indexShow - 1);
        }}
        disabled={indexShow - howToShow <= 0}
      >
        <LeftArrow image={Arrow} />
      </Button>
      <SliderWrapper>
        {children.map((child, i) => {
          if (i >= indexShow - howToShow && i < indexShow) {
            return child;
          }
          return null;
        })}
      </SliderWrapper>
      <Button
        onClick={() => {
          setIndexShow(indexShow + 1);
        }}
        disabled={indexShow >= children.length}
      >
        <RightArrow image={Arrow} />
      </Button>
    </Wrapper>
  );
};

export default Slider;
