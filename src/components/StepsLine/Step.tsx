import styled from "styled-components";
import { Flex } from "../../styled/Flex";

const renderBackground = (status: string) => {
  if (status === "active" || status === "done") {
    return "#6200EE";
  }
  return "rgba(0, 0, 0, 0.6);";
};

const renderPosition = (position: string) => {
  if (position === "first") {
    return { flex: "flex-start", leftOrRight: "left: 0" };
  }
  if (position === "last") {
    return { flex: "flex-end", leftOrRight: "right: 0" };
  }
  return { flex: "center", leftOrRight: "left: -150%" };
};

const Wrapper = styled.div`
  position: relative;
`;

const TextBlock = styled.div`
  position: absolute;
  bottom: 36px;
  ${(props: { position: string }) =>
    renderPosition(props.position).leftOrRight};
  display: flex;
  flex-direction: column;
  align-items: ${(props: { position: string }) =>
    renderPosition(props.position).flex};
`;

const StepValue = styled.div`
  height: 6px;
  width: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props: { status: string }) =>
    props.status === "active" ? "#6200EE" : "#ffffff"};
  border-radius: 50%;
  font-family: Manrope;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  user-select: none;
`;
const StepBorder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 16px;
  min-width: 16px;
  border: 2px solid
    ${(props: { status: string }) => renderBackground(props.status)};
  border-radius: 50%;
  color: ${(props: { status: string }) =>
    props.status === "active" ? "#6200EE" : "rgba(0, 0, 0, 0.6)"};
`;

const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${(props: { status: string }) => renderBackground(props.status)};
  white-space: nowrap;
`;

const Date = styled.div`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: ${(props: { status: string }) => renderBackground(props.status)};
  white-space: nowrap;
`;

type StepProps = {
  position: string;
  title: string;
  date: string;
  status: string;
};

export const Step = ({ title, date, status, position }: StepProps) => {
  return (
    <Wrapper>
      <TextBlock position={position}>
        <Title status={status}>{title}</Title>
        <Date status={status}>{date}</Date>
      </TextBlock>
      <StepBorder status={status}>
        <StepValue status={status}>{status === "done" ? "✔" : null}</StepValue>
      </StepBorder>
    </Wrapper>
  );
};
