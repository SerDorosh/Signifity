import styled from "styled-components";
import { devices } from "../../constants/mediaConstants";

const ProgressPanel = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: 36px;
  border-radius: 12px;
  padding: 4px;
  box-sizing: border-box;
  @media ${devices.mobile} {
    height: 12px;
    padding: 0px;
  }
`;

const getWidth = (percent: number) => {
  if (percent > 100) {
    return "100%";
  }
  if (percent <= 10) {
    return "45px";
  }
  return `${percent}%`;
};

type ProgressBlockProps = {
  progressPercent: number;
  isDone: boolean;
};
const ProgressBlock = styled.div`
  width: ${({ progressPercent }: ProgressBlockProps) =>
    getWidth(progressPercent)};
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 4px 8px;
  background: ${({ theme, isDone }) =>
    isDone ? theme.colors.black : theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  box-sizing: border-box;
`;

type ProgressBarProps = {
  goal: number;
  currentValue: number;
};

const ProgressBar = (props: ProgressBarProps) => {
  const { goal, currentValue } = props;
  const percent = (currentValue / goal) * 100;

  return (
    <ProgressPanel>
      <ProgressBlock progressPercent={percent} isDone={percent >= 100}>
        {percent}%
      </ProgressBlock>
    </ProgressPanel>
  );
};

export default ProgressBar;
