import styled from "styled-components";
import MissionCard from "../../components/MissionCard/MissionCard";
import { PrimaryButton } from "../../styled/PrimaryButton";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 96px 0;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 36px;
`;

const ShowAllButton = styled(PrimaryButton)`
  font-size: 16px;
  height: 36px;
  color: ${({ theme }) => theme.colors.primaryColor};
  background: ${({ theme }) => theme.colors.secondaryPrimary};
`;

const MissionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

type OtherMissionsProps = {
  missions: any[];
};

const OtherMissions = (props: OtherMissionsProps) => {
  const { missions } = props;
  return (
    <Wrapper>
      <CardHeader>
        <Title>Other Missions</Title>
        <ShowAllButton>Show All</ShowAllButton>
      </CardHeader>
      <MissionsGrid>
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
          ) => (
            <MissionCard
              key={id}
              missionName={missionName}
              celebrityName={celebrityName}
              buttonStatus={buttonStatus}
              goal={goal}
              currentProgress={currentProgress}
              image={image}
              size="small"
            ></MissionCard>
          )
        )}
      </MissionsGrid>
    </Wrapper>
  );
};

export default OtherMissions;
