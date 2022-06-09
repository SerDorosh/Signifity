import styled, { DefaultTheme } from "styled-components";
import { Flex } from "../../styled/Flex";
import { PrimaryButton } from "../../styled/PrimaryButton";
import AvatarList from "../AvatarList/AvatarList";
import ProgressBar from "../ProgressBar/ProgressBar";

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
  width: ${(props: { size: string | undefined }) =>
    props.size === "small" ? "430px" : "660px"};
  height: ${(props: { size: string | undefined }) =>
    props.size === "small" ? "342px" : "550px"};
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
`;
const MissionButton = styled(PrimaryButton)`
  height: 28px;
  font-size: 14px;
`;
const DoneButton = styled(PrimaryButton)`
  background: ${({ theme }) => theme.colors.black};
  font-size: 14px;
  height: 28px;
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
  return (
    <CardWrapper size={size}>
      <Flex justifyContent="space-between" margin="20px">
        <AvatarList icons={image} howManyShowIcons={2} />
        <TopText>12 h ago</TopText>
      </Flex>
      <Flex flexDirection="column" margin="20px">
        <BottomTitle>{missionName}</BottomTitle>
        <BottomSubtitle>By {celebrityName}</BottomSubtitle>
        <Flex justifyContent="space-between">
          {currentProgress !== goal ? (
            <MissionButton>{buttonStatus}</MissionButton>
          ) : (
            <DoneButton>Completed</DoneButton>
          )}
          {currentProgress !== goal && (
            <ProgressBar
              goal={goal}
              currentValue={currentProgress}
            ></ProgressBar>
          )}
        </Flex>
      </Flex>
    </CardWrapper>
  );
}
