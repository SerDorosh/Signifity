import styled from "styled-components";
import MissionCard from "../../components/MissionCard/MissionCard";
import Slider from "../../components/Slider/Slider";
import { Flex } from "../../styled/Flex";
import { PrimaryButton } from "../../styled/PrimaryButton";
import { devices } from "../../constants/mediaConstants";

type MissionsProps = {
  missions: any[];
};
const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 36px;
  @media ${devices.tablet} {
    font-size: 20px;
  }
`;
const MissionsBlockWrapper = styled.div`
  margin: 100px 50px;
  @media ${devices.tablet} {
    margin: 30px;
  }

`;
const BigMissionsSliderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  @media ${devices.desktop} {
    overflow: scroll;
  }
`;
const SmallMissionsSliderWrapper = styled(BigMissionsSliderWrapper)`
  margin-top: 20px;
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

export default function MissionsBlock({ missions }: MissionsProps) {
  return (
    <MissionsBlockWrapper>
      <Flex justifyContent="space-between" alignItems="center" margin="10px 0">
        <Title>Missions</Title>
        <ShowAllButton>Show All</ShowAllButton>
      </Flex>
      <BigMissionsSliderWrapper>
        <Slider howToShow={2}>
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
                key={id + i}
                missionName={missionName}
                celebrityName={celebrityName}
                buttonStatus={buttonStatus}
                goal={goal}
                currentProgress={currentProgress}
                image={image}
                size="big"
              ></MissionCard>
            )
          )}
        </Slider>
      </BigMissionsSliderWrapper>
      <SmallMissionsSliderWrapper>
        <Slider howToShow={4}>
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
                key={id + i}
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
        </Slider>
      </SmallMissionsSliderWrapper>
    </MissionsBlockWrapper>
  );
}
