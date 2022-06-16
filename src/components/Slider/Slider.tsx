import { ReactNode, useState } from "react";
import styled from "styled-components";
import Arrow from "../../assets/icons/arrow.svg";
import { devices } from "../../constants/mediaConstants";

const Wrapper = styled.div`
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }
  ${(props: { withoutButton?: boolean }) =>
    props.withoutButton ? "width: 100%" : ""};

  ${(props: { withoutButton?: boolean }) =>
    props.withoutButton ? "overflow-x:scroll" : ""};
`;

const SliderWrapper = styled.div`
  display: flex;
  gap: 16px;
  overflow: hidden;
  ${(props: { withoutButton?: boolean }) =>
    props.withoutButton ? "width: fit-content" : ""};
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
  @media ${devices.tablet} {
    ${(props: { disabled: boolean; left?: boolean }) =>
      props.left ? "left: 8px" : "right: -48px"};
  }
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
  withoutButton?: boolean;
};

const Slider = (props: SliderProps) => {
  const { children, howToShow, withoutButton } = props;
  const [indexShow, setIndexShow] = useState(howToShow);

  return (
    <Wrapper withoutButton={withoutButton}>
      {!withoutButton && (
        <Button
          left
          onClick={() => {
            setIndexShow(indexShow - 1);
          }}
          disabled={indexShow - howToShow <= 0}
        >
          <LeftArrow image={Arrow} />
        </Button>
      )}
      <SliderWrapper withoutButton={withoutButton}>
        {children.map((child, i) => {
          if (withoutButton) {
            return child;
          }
          if (i >= indexShow - howToShow && i < indexShow) {
            return child;
          }
          return null;
        })}
      </SliderWrapper>
      {!withoutButton && (
        <Button
          onClick={() => {
            setIndexShow(indexShow + 1);
          }}
          disabled={indexShow >= children.length}
        >
          <RightArrow image={Arrow} />
        </Button>
      )}
    </Wrapper>
  );
};

export default Slider;
