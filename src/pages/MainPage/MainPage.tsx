import styled from "styled-components";
import Layout from "../../styled/Layout";
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
