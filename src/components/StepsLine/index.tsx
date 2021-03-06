import styled from "styled-components";
import { Step } from "./Step";
import { Line } from "./Line";
import { devices } from "../../constants/mediaConstants";

const StepsWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 160px 0 0 0;
  @media ${devices.tablet} {
    width: ${({ width }: { width?: number }) =>
      width ? `${width}px` : "100%"};
    overflow-x: scroll;
  }
`;
const StepWrap = styled.div`
  display: flex;
  align-items: center;
`;

type StepProps = {
  id: number;
  title: string;
  date: string;
  status: string;
};

export const Steps = ({ steps }: any) => {
  return (
    <StepsWrap>
      {steps.map((step: StepProps, i: number) => {
        return i === 0 ? (
          <Step
            key={step.id}
            position="first"
            title={step.title}
            date={step.date}
            status={step.status}
          />
        ) : (
          <StepWrap key={step.id}>
            <Line status={step.status} />
            <Step
              title={step.title}
              date={step.date}
              status={step.status}
              position={i === steps.length - 1 ? "last" : "center"}
            />
          </StepWrap>
        );
      })}
    </StepsWrap>
  );
};
