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
const SmallMissionsSliderWrapper = styled.div`
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
  const { isMobile, isTablet } = ScreenSize();

  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" margin="10px 0">
        <Title>Missions</Title>
        <ShowAllButton>Show All</ShowAllButton>
      </Flex>
      <Slider howToShow={isMobile || isTablet ? 1 : 2}>
        {missions.map(
          (
            {
              id,
              missionName,
              celebrityName,
              buttonStatus,
              status,
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
              status={status}
            ></MissionCard>
          )
        )}
      </Slider>
      <SmallMissionsSliderWrapper>
        <Slider howToShow={!isMobile || !isTablet ? 3 : 2}>
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
                status,
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
                status={status}
              ></MissionCard>
            )
          )}
        </Slider>
      </SmallMissionsSliderWrapper>
    </>
  );
}
