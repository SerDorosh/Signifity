import styled from "styled-components";

type ProgressPanelProps = {
  isSmall?: boolean;
};

const ProgressPanel = styled.div`
  background: ${({ theme }) => theme.colors.white};
  width: 100%;
  height: ${({ isSmall }: ProgressPanelProps) => (!isSmall ? "36px" : "8px")};
  border-radius: 12px;
  padding: ${({ isSmall }: ProgressPanelProps) => (!isSmall ? "4px" : "0px")};
  box-sizing: border-box;
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
  box-sizing: border-box;
`;

type TextProps = {
  isHideText?: boolean;
};
const Text = styled.span`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  display: ${({ isHideText }: TextProps) => isHideText && "none"};
`;

type ProgressBarProps = {
  goal: number;
  currentValue: number;
  isHideText?: boolean;
  isSmall?: boolean;
};

const ProgressBar = (props: ProgressBarProps) => {
  const { goal, currentValue, isHideText, isSmall } = props;
  const percent = (currentValue / goal) * 100;

  return (
    <ProgressPanel isSmall={isSmall}>
      <ProgressBlock progressPercent={percent} isDone={percent >= 100}>
        <Text isHideText={isHideText}>{percent}%</Text>
      </ProgressBlock>
    </ProgressPanel>
  );
};

export default ProgressBar;
