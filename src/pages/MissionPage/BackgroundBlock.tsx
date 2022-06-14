import styled, { DefaultTheme } from "styled-components";
import AvatarList from "../../components/AvatarList/AvatarList";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Timer from "../../components/Timer/Timer";
import { devices } from "../../constants/mediaConstants";
import { Flex } from "../../styled/Flex";
import Layout from "../../styled/Layout";
import { PrimaryButton } from "../../styled/PrimaryButton";

type StatusLabelProps = {
  theme: DefaultTheme;
  status: string;
};

const StatusLabel = styled(PrimaryButton)`
  color: ${({ theme, status }: StatusLabelProps) =>
    status === "Complete" ? theme.colors.black : theme.colors.primaryColor};
  background: ${({ theme }) => theme.colors.white};
  height: 32px;
  margin-bottom: 12px;
`;

const BackgroundWrapper = styled.div`
  width: 100%;
  height: 580px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  ${(props: { image?: string; theme: DefaultTheme }) =>
    props.image
      ? `background-image: url(${props.image})`
      : `background: ${props.theme.colors.gray}`};

  @media ${devices.tablet} {
    display: none;
  }
`;

const Content = styled(Layout)`
  position: relative;
  max-width: 1440px;
  @media ${devices.tablet} {
    margin: 24px;
  }
`;

const MissionTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 72px;
  color: ${({ theme }) => theme.colors.black};
`;

const CelebrityName = styled.div`
  margin-left: 16px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
`;

const JoinButton = styled(PrimaryButton)`
  margin-right: 24px;
`;

const GoalBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  margin-left: 24px;
  padding: 8px 16px;
  color: ${({ theme }) => theme.colors.primaryColor};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  box-sizing: border-box;
`;

type BackgroundBlockProps = {
  status: string;
  celebrityIcons: string[];
  dateStart: number;
  goal: number;
  currentValue: number;
  currency: string;
};

const BackgroundBlock = (props: BackgroundBlockProps) => {
  const { status, celebrityIcons, dateStart, goal, currency, currentValue } =
    props;

  return (
    <BackgroundWrapper>
      <Content>
        <Flex>
          <StatusLabel status={status}>{status}</StatusLabel>
        </Flex>
        <MissionTitle>Mission Title</MissionTitle>
        <Flex alignItems="center" margin="16px 0 56px">
          <AvatarList icons={celebrityIcons} howManyShowIcons={2} />
          <CelebrityName>By Celebrity Name & Fund Name...</CelebrityName>
        </Flex>
        {status === "pending" ? (
          <Flex alignItems="center">
            <JoinButton>Join to the wait list</JoinButton>
            <Timer date={dateStart} text="{timer} left" />
          </Flex>
        ) : (
          <Flex alignItems="center">
            <ProgressBar goal={goal} currentValue={currentValue} />
            <GoalBlock>{`${goal} ${currency}`}</GoalBlock>
          </Flex>
        )}
      </Content>
    </BackgroundWrapper>
  );
};

export default BackgroundBlock;
