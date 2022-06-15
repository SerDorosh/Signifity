import styled, { DefaultTheme } from "styled-components";
import MissionCard from "./MissionCard";
import { PrimaryButton } from "../../styled/PrimaryButton";

const Wrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.gray};
  border-radius: 12px;
  height: ${(props: { size: string | undefined }) =>
    props.size === "small" ? "376px" : "550px"};
  box-sizing: border-box;
`;

const JoinButton = styled(PrimaryButton)`
  font-size: 14px;
  position: relative;
  top:30px;
  margin: 0px 25px;
  height: 32px;
`;

type MissionsProps = {
  missionName: string;
  celebrityName: string;
  goal: number;
  currentProgress: number;
  image: string[];
  theme?: DefaultTheme;
  size: string;
  status: string;
};

export default function MobileMissionCard({
  missionName,
  celebrityName,
  goal,
  currentProgress,
  image,
  status,
  size,
}: MissionsProps) {

  return (
    <Wrapper size={size}>
      <MissionCard
        missionName={missionName}
        celebrityName={celebrityName}
        goal={goal}
        currentProgress={currentProgress}
        image={image}
        size={size}
        status={status}
      ></MissionCard>
      <JoinButton size={size}>Join to the wait list</JoinButton>
    </Wrapper>
  );
}
