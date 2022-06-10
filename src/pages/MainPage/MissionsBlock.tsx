import styled from "styled-components";
import MissionCard from "../../components/MissionCard/MissionCard";
import { Flex } from "../../styled/Flex";
import { PrimaryButton } from "../../styled/PrimaryButton";

type MissionsProps = {
  missions: any[];
};
const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 36px;
`;
const MissionsBlockWrapper = styled.div`
  margin: 100px 50px;
`;
const ShowAllButton = styled(PrimaryButton)`
  font-size: 16px;
  height: 36px;
  color: ${({ theme }) => theme.colors.primaryColor};
  background: ${({ theme }) => theme.colors.secondaryPrimary};
`;

export default function MissionsBlock({ missions }: MissionsProps) {
  return (
    <MissionsBlockWrapper>
      <Flex justifyContent="space-between" alignItems="center" margin="10px 0">
        <Title>Missions</Title>
        <ShowAllButton>Show All</ShowAllButton>
      </Flex>
      <Flex flexWrap={"wrap"} justifyContent="center" gap={20}>
        {missions.map(
          (
            {
              id,
              missionName,
              celebrityName,
              buttonStatus,
              goal,
              currentProgress,
              image,
            },
            i
          ) => ( currentProgress !== goal &&
            <MissionCard
              key={id}
              missionName={missionName}
              celebrityName={celebrityName}
              buttonStatus={buttonStatus}
              goal={goal}
              currentProgress={currentProgress}
              image={image}
              size={i > 1 ? "small" : "big"}
            ></MissionCard>
          )
        )}
      </Flex>
    </MissionsBlockWrapper>
  );
}
