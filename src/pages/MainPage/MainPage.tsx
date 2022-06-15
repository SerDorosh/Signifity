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
import { MainMockData } from "./MainMockData";

const Content = styled(Layout)`
  max-width: 1440px;
`;

export default function MainPage() {
  const { celebrities, projects, doneProjects, nfts } = MainMockData;

  return (
    <Content>
      <UnderHeaderMenu projects={projects} />
      <MissionsBlock missions={projects} />
      <OurCelebrities ourCelebrities={celebrities} />
      <PopularNft nfts={nfts} />
      <CompletedMissions missions={doneProjects} />
      <IntroducingSigniftyCoin />
      <OurPartners />
    </Content>
  );
}
