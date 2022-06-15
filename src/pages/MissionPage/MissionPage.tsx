import { useState } from "react";
import styled, { DefaultTheme } from "styled-components";
import AvatarList from "../../components/AvatarList/AvatarList";
import CelebrityCard from "../../components/CelebrityCard/CelebrityCard";
import { JoinPanel } from "../../components/JoinPanel/JoinPanel";
import ButtonBlock from "../../components/MissionsPanel/ButtonBlock";
import InfoBlock from "../../components/MissionsPanel/InfoBlock";
import NotificationBlock from "../../components/Notification/NotificationBlock";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Timer from "../../components/Timer/Timer";
import { devices } from "../../constants/mediaConstants";
import { checkMobileBrowser } from "../../helpers";
import { Flex } from "../../styled/Flex";
import Layout from "../../styled/Layout";
import { PrimaryButton } from "../../styled/PrimaryButton";
import AboutMission from "./AboutMission";
import BackgroundBlock from "./BackgroundBlock";
import DropName from "./DropName";
import MissionReport from "./MissionReport";
import { MockData } from "./MockData";
import OtherMissions from "./OtherMissions";
import SaleHistory from "./SaleHistory";
import ThanksBlock from "./ThanksBlock";

const Page = styled.div`
  position: relative;
  gap: 96px;
  @media ${devices.tablet} {
    display: grid;
    grid-template-columns: 100%;
    grid-template-areas:
      "1"
      "2"
      "3"
      "4"
      "JoinPanel";
  }
`;

const Content = styled(Layout)`
  position: relative;
  max-width: 1440px;
  @media ${devices.tablet} {
    margin: 24px;
  }
`;

const PageParts = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 67% 33%;
  grid-gap: 50px;
  width: 100%;
  @media ${devices.tablet} {
    grid-template-columns: 100%;
    grid-template-areas:
      "Right"
      "Left";
  }
`;

const PanelBetweenParts = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: -72px;
  right: 0;
  left: 0;
  transform: translate(0, -50%);
  z-index: 100;
  box-sizing: border-box;
  @media ${devices.tablet} {
    position: static;
    margin-top: 13px;
  }
`;

const LeftPart = styled.div`
  display: flex;
  flex-direction: column;
  @media ${devices.tablet} {
    grid-area: Left;
  }
`;
const RightPart = styled.div`
  display: flex;
  justify-content: center;
  @media ${devices.tablet} {
    grid-area: Right;
  }
`;

const MissionPage = () => {
  const {
    dateStart,
    celebrityIcons,
    status,
    goal,
    currentValue,
    currency,
    celebrity,
    aboutMission,
    dropName,
    otherMissions,
    tableData,
    thanks,
    missionReport,
    modal,
  } = MockData;

  const [showNotification, setShowNotification] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = checkMobileBrowser();
  return (
    <Page onClick={() => setShowMenu(false)}>
      {showNotification && (
        <NotificationBlock
          title={modal.title}
          description={modal.description}
          isOpen={showNotification}
          setIsOpen={setShowNotification}
        />
      )}
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
      <Content>
        <PanelBetweenParts>
          <InfoBlock />

          {!isMobile && (
            <ButtonBlock
              showNotification={setShowNotification}
              showMenu={showMenu}
              setShowMenu={setShowMenu}
            />
          )}
        </PanelBetweenParts>
        <PageParts>
          <LeftPart>
            {thanks && <ThanksBlock />}
            <AboutMission
              title={aboutMission.title}
              description={aboutMission.description}
              funds={aboutMission.funds}
            />
            {missionReport && <MissionReport />}
            <DropName
              title={dropName.title}
              description={dropName.description}
              steps={dropName.steps}
              nfts={dropName.nfts}
            />
          </LeftPart>
          <RightPart>
            <CelebrityCard
              avatar={celebrity.avatar}
              name={celebrity.name}
              social={celebrity.social}
            />
          </RightPart>
        </PageParts>
      </Content>

      <JoinPanel showJoin />

      <SaleHistory tableData={tableData} />
      <Content>
        <OtherMissions missions={otherMissions} />
      </Content>
    </Page>
  );
};

export default MissionPage;
