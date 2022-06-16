import styled, { DefaultTheme } from "styled-components";
import AvatarList from "../../components/AvatarList/AvatarList";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Timer from "../../components/Timer/Timer";
import { devices } from "../../constants/mediaConstants";
import { checkMobileBrowser } from "../../helpers";
import { Flex } from "../../styled/Flex";
import Layout from "../../styled/Layout";
import { PrimaryButton } from "../../styled/PrimaryButton";
import ButtonBlock from "../../components/MissionsPanel/ButtonBlock";
import {
  PREPARING_STATUS,
  COMPLETED_STATUS,
} from "../../constants/statusConstants";
type StatusLabelProps = {
  theme: DefaultTheme;
  status: string;
};

const StatusLabel = styled(PrimaryButton)`
  color: ${({ theme, status }: StatusLabelProps) =>
    status === COMPLETED_STATUS
      ? theme.colors.black
      : theme.colors.primaryColor};
  background: ${({ theme }) => theme.colors.white};
  height: 32px;
  margin-bottom: 12px;
  @media ${devices.tablet} {
    display: none;
  }
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
    height: 480px;
    justify-content: space-between;
  }
`;

const Content = styled(Layout)`
  position: relative;
  max-width: 1440px;
  @media ${devices.tablet} {
    width: 100vw;
    margin: 0 0 60px;
    padding: 24px;
  }
`;

const MissionTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 72px;
  color: ${({ theme }) => theme.colors.black};
  @media ${devices.tablet} {
    font-size: 34px;
    line-height: 36px;
  }
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
  @media ${devices.tablet} {
    margin: 0;
    height: 48px;
    grid-area: Join;
  }
`;

type GoalBlockProps = {
  theme: DefaultTheme;
  status: boolean;
};

const GoalBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  margin-left: 24px;
  padding: 8px 16px;
  color: ${({ theme, status }: GoalBlockProps) =>
    status ? theme.colors.black : theme.colors.primaryColor};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  box-sizing: border-box;
  white-space: nowrap;
`;

const CelebrityAvatarBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0 56px;
  @media ${devices.tablet} {
    display: none;
  }
`;

const ButtonDiv = styled.div`
  display: flex;
  align-items: center;
  @media ${devices.tablet} {
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-areas:
      "Timer"
      "Join";
    gap: 24px;
  }
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media ${devices.tablet} {
    align-items: center;
    gap: 24px;
  }
`;

const ProgressBlock = styled.div`
  display: flex;
  align-items: center;
  @media ${devices.tablet} {
    width: 100%;
  }
`;

type BackgroundBlockProps = {
  status: string;
  celebrityIcons: string[];
  dateStart: number;
  goal: number;
  currentValue: number;
  currency: string;
  showNotification: (value: boolean) => void;
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
};

const BackgroundBlock = (props: BackgroundBlockProps) => {
  const {
    status,
    celebrityIcons,
    dateStart,
    goal,
    currency,
    currentValue,
    showNotification,
    showMenu,
    setShowMenu,
  } = props;
  const isMobile = checkMobileBrowser();
  return (
    <BackgroundWrapper>
      {isMobile && (
        <ButtonBlock
          showNotification={showNotification}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          status={status}
        />
      )}
      <Content>
        <Block>
          <Flex>
            <StatusLabel status={status}>{status}</StatusLabel>
          </Flex>
          <MissionTitle>Mission Title</MissionTitle>
          <CelebrityAvatarBlock>
            <AvatarList icons={celebrityIcons} howManyShowIcons={2} />
            <CelebrityName>By Celebrity Name & Fund Name...</CelebrityName>
          </CelebrityAvatarBlock>
          {status === PREPARING_STATUS ? (
            <ButtonDiv>
              <JoinButton>Join to the wait list</JoinButton>
              <Timer date={dateStart} text="{timer} left" />
            </ButtonDiv>
          ) : (
            <ProgressBlock>
              <ProgressBar goal={goal} currentValue={currentValue} />
              <GoalBlock
                status={goal === currentValue}
              >{`${goal} ${currency}`}</GoalBlock>
            </ProgressBlock>
          )}
        </Block>
      </Content>
    </BackgroundWrapper>
  );
};

export default BackgroundBlock;
