import styled, { DefaultTheme } from "styled-components";
import { Flex } from "../../styled/Flex";
import { PrimaryButton } from "../../styled/PrimaryButton";
import ProgressBar from "../ProgressBar/ProgressBar";
import { devices } from "../../constants/mediaConstants";
import DoubleImage from "../DoubleImage/DoubleImage";
import ScreenSize from "../../helpers/ScreenSize";

type MissionsProps = {
  missionName: string;
  celebrityName: string;
  buttonStatus: string;
  goal: number;
  currentProgress: number;
  image: string[];
  size: string;
  theme?: DefaultTheme;
};
type ImageProps = {
  image: string | undefined;
};

const CardWrapper = styled.div`
  width: 100%;
  min-height: ${(props: { size: string | undefined }) =>
    props.size === "small" ? "342px" : "550px"};
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  @media ${devices.tablet} {
    padding: 5px;
    height: ${(props: { size: string | undefined }) =>
      props.size === "small" ? "280px" : "454px"};
  }
`;
export const FirstProjectImage = styled.div`
  position: relative;
  width: 56px;
  height: 56px;
  background-image: url(${(props: ImageProps) => props.image});
  border: 4px solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;
`;
export const SecondProjectImage = styled(FirstProjectImage)`
  position: relative;
  background-image: url(${(props: ImageProps) => props.image});
  right: 30px;
`;
const TopText = styled.p`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  text-align: right;
  letter-spacing: 0.1px;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.black};
`;

const BottomTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
`;
const BottomSubtitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.lightBlack};
  margin: 10px 0 15px;
  @media ${devices.tablet} {
    margin: 5px 0 15px;
  }
`;
const ButtonAndProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  @media ${devices.tablet} {
    flex-direction: column;
    align-items: start;
  }
`;
const MissionButton = styled(PrimaryButton)`
  height: 32px;
  font-size: 14px;
  padding: 0 10px;
`;
const DoneButton = styled(PrimaryButton)`
  background: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  padding: 0 1px;
  height: 32px;
  width: 94px;
  @media ${devices.tablet} {
    width: 86px;
  }
`;
export default function MissionCard({
  missionName,
  celebrityName,
  buttonStatus,
  goal,
  currentProgress,
  image,
  size,
}: MissionsProps) {
  const { isMobile, isTablet } = ScreenSize();

  return (
    <CardWrapper size={size}>
      <Flex justifyContent="space-between" margin="20px">
        <DoubleImage
          size={isMobile || isTablet ? "56px" : "80px"}
          side="left"
          firstImage={image[0]}
          secondImage={image[1]}
        ></DoubleImage>
        {goal !== currentProgress && <TopText>12 h ago</TopText>}
      </Flex>
      <Flex flexDirection="column" margin="20px">
        <BottomTitle>{missionName}</BottomTitle>
        <BottomSubtitle>By {celebrityName}</BottomSubtitle>
        <ButtonAndProgressWrapper>
          {currentProgress !== goal ? (
            <MissionButton>{buttonStatus}</MissionButton>
          ) : (
            <DoneButton>Completed</DoneButton>
          )}
          {currentProgress !== goal && (
            <ProgressBar
            isSmall={isMobile || isTablet}
            isHideText={isMobile || isTablet}
              goal={goal}
              currentValue={currentProgress}
            ></ProgressBar>
          )}
        </ButtonAndProgressWrapper>
      </Flex>
    </CardWrapper>
  );
}
