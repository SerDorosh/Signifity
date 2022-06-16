import styled from "styled-components";
import Layout from "../../styled/Layout";
import { devices } from "../../constants/mediaConstants";
import MissionsBlock from "./MissionsBlock";
import OurCelebrities from "./OurCelebrities";
import PopularNft from "./PopularNft";
import UnderHeaderMenu from "./UnderHeaderMenu";
import CompletedMissions from "./CompletedMissions";
import OurPartners from "./OurPartners";
import IntroducingSigniftyCoin from "./IntroducingSigniftyCoin";
import { MainMockData } from "./MainMockData";
import { MockData } from "../MissionPage/MockData";
import BackgroundBlock from "../MissionPage/BackgroundBlock";
import { useState } from "react";
import MainMobileBackgroundBlock from "./MainMobileBackgroundBlock";
import ScreenSize from "../../helpers/ScreenSize";

const Content = styled(Layout)`
  max-width: 1440px;
  @media ${devices.tablet} {
    margin: 24px;
  }
`;

export default function MainPage() {
  const [showNotification, setShowNotification] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const { celebrities, projects, doneProjects, nfts } = MainMockData;
  const {
    dateStart,
    celebrityIcons,
    status,
    goal,
    currentValue,
    currency,
    name,
  } = MockData;

  const { isMobile, isTablet } = ScreenSize();
  return (
    <>
      <Content>
        <UnderHeaderMenu projects={projects} />
        {(isTablet || isMobile) && (
          <MainMobileBackgroundBlock
            celebrityIcons={celebrityIcons}
            name={name}
          />
        )}
      </Content>
      {!isTablet && !isMobile && (
        <BackgroundBlock
          status={status}
          celebrityIcons={celebrityIcons}
          dateStart={dateStart}
          goal={goal}
          currentValue={currentValue}
          currency={currency}
          showNotification={setShowNotification}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
      )}
      <Content>
        <MissionsBlock missions={projects} />
        <OurCelebrities ourCelebrities={celebrities} />
        <PopularNft nfts={nfts} />
        <CompletedMissions missions={doneProjects} />
        <IntroducingSigniftyCoin />
        <OurPartners />
      </Content>
    </>
  );
}
