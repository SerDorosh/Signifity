import styled, { DefaultTheme } from "styled-components";
import AvatarList from "../../components/AvatarList/AvatarList";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Timer from "../../components/Timer/Timer";
import { Flex } from "../../styled/Flex";
import Layout from "../../styled/Layout";
import { PrimaryButton } from "../../styled/PrimaryButton";
import MissionsBlock from "./MissionsBlock";
import OurCelebrities from "./OurCelebrities";
import PopularNft from "./PopularNft";
import UnderHeaderMenu from "./UnderHeaderMenu";
import CompletedMissions from "./CompletedMissions";
import OurPartners from "./OurPartners";
import IntroducingSigniftyCoin from "./IntroducingSigniftyCoin";
import Slider from "../../components/Slider/Slider";

const BackgroundBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  ${(props: { image?: string; theme: DefaultTheme }) =>
    props.image
      ? `background-image: url(${props.image})`
      : `background: ${props.theme.colors.gray}`};
`;

const Content = styled(Layout)`
  max-width: 1440px;
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
  font-family: ${({ theme }) => theme.fonts.Roboto};
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

export default function MainPage() {
  const mockOurCelebrities = {
    1: {
      id: 1,
      name: "Sebastian Bravo",
      image: [
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
      ],
    },
    2: {
      id: 2,
      name: "Sebastian Bravo",
      image: [
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
      ],
    },
    3: {
      id: 3,
      name: "Sebastian Bravo",
      image: [
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
      ],
    },
    5: {
      id: 5,
      name: "Sebastian Bravo",
      image: [
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
      ],
    },
    4: {
      id: 4,
      name: "Sebastian Bravo",
      image: [
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
      ],
    },
    6: {
      id: 6,
      name: "Sebastian Bravo",
      image: [
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
      ],
    },
    7: {
      id: 7,
      name: "Sebastian Bravo",
      image: [
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
      ],
    },
  };
  const ourCelebrities = Object.values(mockOurCelebrities);

  const mockProjects = {
    A: {
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
    B: {
      id: 1,
      missionName: "MissionTitle2123",
      celebrityName: "Celebrity Name2",
      image: [
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
      ],
      buttonStatus: "Ongoing",
      goal: 100,
      currentProgress: 40,
    },
    C: {
      id: 2,
      missionName: "MissionTitle2323",
      celebrityName: "Celebrity Name2",
      image: [
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
      ],
      buttonStatus: "Drop",
      goal: 100,
      currentProgress: 70,
    },
    D: {
      id: 3,
      missionName: "MissionTitle3123",
      celebrityName: "Celebrity Name223",
      image: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLsa2zm7abJ_1YcMA1aSuuc7KM6Og3kBeDg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLsa2zm7abJ_1YcMA1aSuuc7KM6Og3kBeDg&usqp=CAU",
      ],
      buttonStatus: "Join to the wait List",
      goal: 100,
      currentProgress: 70,
    },
    E: {
      id: 4,
      missionName: "MissionTitle253",
      celebrityName: "Celebrity Name2",
      image: [
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
      ],
      buttonStatus: "Presale",
      goal: 100,
      currentProgress: 100,
    },
    F: {
      id: 5,
      missionName: "MissionTitle253",
      celebrityName: "Celebrity Name2",
      image: [
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
      ],
      buttonStatus: "Presale",
      goal: 100,
      currentProgress: 100,
    },
    G: {
      id: 6,
      missionName: "MissionTitle253",
      celebrityName: "Celebrity Name2",
      image: [
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
      ],
      buttonStatus: "Presale",
      goal: 100,
      currentProgress: 100,
    },
    H: {
      id: 7,
      missionName: "MissionTitle253",
      celebrityName: "Celebrity Name2",
      image: [
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLsa2zm7abJ_1YcMA1aSuuc7KM6Og3kBeDg&usqp=CAU",
      ],
      buttonStatus: "Presale",
      goal: 100,
      currentProgress: 100,
    },
    i: {
      id: 8,
      missionName: "MissionTitle253",
      celebrityName: "Celebrity Name2",
      image: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLsa2zm7abJ_1YcMA1aSuuc7KM6Og3kBeDg&usqp=CAU",

        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLsa2zm7abJ_1YcMA1aSuuc7KM6Og3kBeDg&usqp=CAU",
      ],
      buttonStatus: "Presale",
      goal: 100,
      currentProgress: 10,
    },
  };
  const projects = Object.values(mockProjects);
  const mockNft = {
    1: {
      id: 1,
      name: "NFT 1",
      image: [
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
      ],
      likes: 1,
      rating: 1000,
      price: "0.019 ETN",
    },
    2: {
      id: 2,
      name: "NFT 12",
      image: [
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
      ],
      likes: 225,
      rating: 1000,
      price: "0.002 ETN",
    },
    3: {
      id: 3,
      name: "NFT 13",
      image: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLsa2zm7abJ_1YcMA1aSuuc7KM6Og3kBeDg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLsa2zm7abJ_1YcMA1aSuuc7KM6Og3kBeDg&usqp=CAU",
      ],
      likes: 2512,
      rating: 1000,
      price: "0.1 ETN",
    },
    4: {
      id: 4,
      name: "NFT 2214",
      image: [
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLsa2zm7abJ_1YcMA1aSuuc7KM6Og3kBeDg&usqp=CAU",
      ],
      likes: 225,
      rating: 1000,
      price: "0.0055 ETN",
    },
  };
  const nfts = Object.values(mockNft);
  const MockData = {
    dateStart: 164625080000,
    celebrityIcons: [
      "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLsa2zm7abJ_1YcMA1aSuuc7KM6Og3kBeDg&usqp=CAU",
      "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLsa2zm7abJ_1YcMA1aSuuc7KM6Og3kBeDg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLsa2zm7abJ_1YcMA1aSuuc7KM6Og3kBeDg&usqp=CAU",
      "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLsa2zm7abJ_1YcMA1aSuuc7KM6Og3kBeDg&usqp=CAU",
    ],
    status: "inProgres",
    goal: 10000,
    currentValue: 200,
    currency: "ETH",
    celebrity: {
      name: "Celebrity Name",
      avatar:
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
      social: ["@instagram", "@tiktok", "@youtube", "@facebook"],
    },
  };
  const { dateStart, celebrityIcons, status, goal, currentValue, currency } =
    MockData;

  return (
    <>
      <UnderHeaderMenu projects={projects} />
      <BackgroundBlock>
        <Content>
          <MissionTitle>Mission Title</MissionTitle>
          <Flex alignItems="center" margin="16px 0 56px">
            <AvatarList icons={celebrityIcons} howManyShowIcons={2} />
            <CelebrityName>By Celebrity Name & Fund Name...</CelebrityName>
          </Flex>
          {status === "pending" ? (
            <Flex alignItems="center">
              <JoinButton>Join to the wait list</JoinButton>
              <Timer date={dateStart} text="{timer} left" />
            </Flex>
          ) : (
            <Flex alignItems="center">
              <ProgressBar goal={goal} currentValue={currentValue} />
              <GoalBlock>{`${goal} ${currency}`}</GoalBlock>
            </Flex>
          )}
        </Content>
      </BackgroundBlock>
      <MissionsBlock missions={projects} />
      <OurCelebrities ourCelebrities={ourCelebrities} />
      <PopularNft nfts={nfts} />
      <CompletedMissions missions={projects} />
      <IntroducingSigniftyCoin />
      <OurPartners />
    </>
  );
}
