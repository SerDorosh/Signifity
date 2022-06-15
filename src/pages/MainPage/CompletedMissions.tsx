import styled from "styled-components";
import MissionCard from "../../components/MissionCard/MissionCard";
import Slider from "../../components/Slider/Slider";
import { Flex } from "../../styled/Flex";
import { PrimaryButton } from "../../styled/PrimaryButton";
import { devices } from "../../constants/mediaConstants";
import ScreenSize from "../../helpers/ScreenSize";

type MissionsProps = {
  missions: any[];
};

const CompletedMissionsWrapper = styled.div`
  margin: 120px 0;
  @media ${devices.tablet} {
    margin: 72px 0 136px 0;
  }
`;
const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 36px;
  @media ${devices.tablet} {
    font-size: 20px;
  }
`;
const ShowAllButton = styled(PrimaryButton)`
  font-size: 16px;
  height: 36px;
  color: ${({ theme }) => theme.colors.primaryColor};
  background: ${({ theme }) => theme.colors.secondaryPrimary};
  @media ${devices.tablet} {
    background: none;
  }
`;

export default function CompletedMissions({ missions }: MissionsProps) {
  const { isMobile } = ScreenSize();

  return (
    <CompletedMissionsWrapper>
      <Flex justifyContent="space-between" alignItems="center" margin="10px 0">
        <Title>Completed Missions</Title>
        <ShowAllButton>Show All</ShowAllButton>
      </Flex>
      <Slider withoutButton={isMobile} howToShow={4}>
        {missions.map(
          ({
            id,
            missionName,
            celebrityName,
            image,
            currentProgress,
            status,
            goal,
          }) => (
            <MissionCard
              key={id}
              missionName={missionName}
              celebrityName={celebrityName}
              image={image}
              currentProgress={currentProgress}
              status={status}
              goal={goal}
              size="small"
            />
          )
        )}
      </Slider>
    </CompletedMissionsWrapper>
  );
}
