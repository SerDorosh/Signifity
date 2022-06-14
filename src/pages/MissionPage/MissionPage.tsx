import { useState } from "react";
import styled, { DefaultTheme } from "styled-components";
import AvatarList from "../../components/AvatarList/AvatarList";
import CelebrityCard from "../../components/CelebrityCard/CelebrityCard";
import ButtonBlock from "../../components/MissionsPanel/ButtonBlock";
import InfoBlock from "../../components/MissionsPanel/InfoBlock";
import NotificationBlock from "../../components/Notification/NotificationBlock";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Timer from "../../components/Timer/Timer";
import { devices } from "../../constants/mediaConstants";
import { Flex } from "../../styled/Flex";
import Layout from "../../styled/Layout";
import { PrimaryButton } from "../../styled/PrimaryButton";
import AboutMission from "./AboutMission";
import BackgroundBlock from "./BackgroundBlock";
import DropName from "./DropName";
import MissionReport from "./MissionReport";
import OtherMissions from "./OtherMissions";
import SaleHistory from "./SaleHistory";
import ThanksBlock from "./ThanksBlock";

const Page = styled.div`
  position: relative;
`;

type StatusLabelProps = {
  theme: DefaultTheme;
  status: string;
};

const StatusLabel = styled(PrimaryButton)`
  color: ${({ theme, status }: StatusLabelProps) =>
    status === "Complete" ? theme.colors.black : theme.colors.primaryColor};
  background: ${({ theme }) => theme.colors.white};
  height: 32px;
  margin-bottom: 12px;
`;

// const BackgroundBlock = styled.div`
//   width: 100%;
//   height: 580px;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: center;
//   background-repeat: no-repeat;
//   background-size: cover;
//   background-position: center;
//   ${(props: { image?: string; theme: DefaultTheme }) =>
//     props.image
//       ? `background-image: url(${props.image})`
//       : `background: ${props.theme.colors.gray}`};

//   @media ${devices.tablet} {
//     display: none;
//   }
// `;

const Content = styled(Layout)`
  position: relative;
  max-width: 1440px;
  @media ${devices.tablet} {
    margin: 24px;
  }
`;

const MissionTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 72px;
  color: ${({ theme }) => theme.colors.black};
`;

const CelebrityName = styled.div`
  margin-left: 16px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
`;

const JoinButton = styled(PrimaryButton)`
  margin-right: 24px;
`;

const GoalBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  margin-left: 24px;
  padding: 8px 16px;
  color: ${({ theme }) => theme.colors.primaryColor};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  box-sizing: border-box;
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
    display: none;
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
  const MockData = {
    dateStart: 1664625080000,
    celebrityIcons: [
      "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLsa2zm7abJ_1YcMA1aSuuc7KM6Og3kBeDg&usqp=CAU",
      "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
    ],
    status: "Complete",
    goal: 10000,
    currentValue: 200,
    currency: "ETH",
    celebrity: {
      name: "Celebrity Name",
      avatar:
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
      social: ["@instagram", "@tiktok", "@youtube", "@facebook"],
    },
    aboutMission: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      title: "What is this mission about?",
      funds: [
        {
          id: 1,
          name: "Fund Name",
          title: "Fund",
        },
        {
          id: 2,
          name: "Fund Name",
          title: "Fund",
        },
        {
          id: 3,
          name: "Fund Name",
          title: "Fund",
        },
      ],
    },
    dropName: {
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      title: "Drop Name",
      steps: [
        {
          id: 1,
          title: "Join",
          date: "22 Aug, 2022",
          status: "done",
        },
        {
          id: 2,
          title: "Presale",
          date: "22 Aug, 2022",
          status: "active",
        },
        {
          id: 3,
          title: "Drop",
          date: "22 Aug, 2022",
          status: "pending",
        },
        {
          id: 4,
          title: "In process",
          date: "22 Aug, 2022",
          status: "pending",
        },
        {
          id: 5,
          title: "Complete",
          date: "22 Aug, 2022",
          status: "pending",
        },
      ],
      nfts: [
        { id: 1, dropStatus: "dropPending", date: 1664625080000 },
        { id: 2, dropStatus: "dropStart" },
        { id: 3, dropStatus: "notForSale" },
      ],
    },
    otherMissions: [
      {
        id: 0,
        missionName: "MissionTitle1",
        celebrityName: "Celebrity Name1",
        image: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLsa2zm7abJ_1YcMA1aSuuc7KM6Og3kBeDg&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLsa2zm7abJ_1YcMA1aSuuc7KM6Og3kBeDg&usqp=CAU",
        ],
        buttonStatus: "Presale",
        goal: 100,
        currentProgress: 10,
      },
      {
        id: 1,
        missionName: "MissionTitle2123",
        celebrityName: "Celebrity Name2",
        image: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLsa2zm7abJ_1YcMA1aSuuc7KM6Og3kBeDg&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLsa2zm7abJ_1YcMA1aSuuc7KM6Og3kBeDg&usqp=CAU",
        ],
        buttonStatus: "Ongoing",
        goal: 100,
        currentProgress: 40,
      },
      {
        id: 2,
        missionName: "MissionTitle2323",
        celebrityName: "Celebrity Name2",
        image: [
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLsa2zm7abJ_1YcMA1aSuuc7KM6Og3kBeDg&usqp=CAU",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLsa2zm7abJ_1YcMA1aSuuc7KM6Og3kBeDg&usqp=CAU",
        ],
        buttonStatus: "Drop",
        goal: 100,
        currentProgress: 70,
      },
    ],
    tableData: [
      {
        id: 1,
        nft: {
          name: "NFT Name",
          image:
            "https://live.staticflickr.com/8591/16215707781_98e72548e7_b.jpg",
        },
        buyer: {
          avatar:
            "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
          name: "User Name",
        },
        salePrice: "9.999 ETH",
        amount: 2,
        dateTime: "20 Aug, 2022 00:00",
      },
      {
        id: 2,
        nft: {
          name: "NFT Name",
          image:
            "https://user-dashboard.s3.us-east-2.amazonaws.com/nft-metadata/0x1a92f7381b9f03921564a437210bb9396471050c/9728.png",
        },
        buyer: {
          avatar:
            "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
          name: "User Name",
        },
        salePrice: "9.999 ETH",
        amount: 2,
        dateTime: "26 Aug, 2022 00:00",
      },
      {
        id: 3,
        nft: {
          name: "NFT Name",
          image:
            "https://user-dashboard.s3.us-east-2.amazonaws.com/nft-metadata/0x1a92f7381b9f03921564a437210bb9396471050c/9728.png",
        },
        buyer: {
          avatar:
            "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
          name: "User Name",
        },
        salePrice: "9.999 ETH",
        amount: 2,
        dateTime: "24 Aug, 2022 00:00",
      },
      {
        id: 4,
        nft: {
          name: "NFT Name",
          image:
            "https://user-dashboard.s3.us-east-2.amazonaws.com/nft-metadata/0x1a92f7381b9f03921564a437210bb9396471050c/9728.png",
        },
        buyer: {
          avatar:
            "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
          name: "User Name",
        },
        salePrice: "9.999 ETH",
        amount: 2,
        dateTime: "22 Aug, 2022 00:00",
      },
    ],
    thanks: true,
    missionReport: false,
    modal: {
      title: "Our congratulations!",
      description:
        " We are glad that you managed to join the mission and now you can participate in the presale. Have a fun!",
    },
  };

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

  console.log(showMenu);
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
      />
      <Content>
        <PanelBetweenParts>
          <InfoBlock />
          <ButtonBlock
            showNotification={setShowNotification}
            showMenu={showMenu}
            setShowMenu={setShowMenu}
          />
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
      <SaleHistory tableData={tableData} />
      {/* <Content>
        <OtherMissions missions={otherMissions} />
      </Content> */}
    </Page>
  );
};

export default MissionPage;
