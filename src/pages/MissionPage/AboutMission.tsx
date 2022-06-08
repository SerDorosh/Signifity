import styled from "styled-components";
import FundCard from "../../components/FundCard/FundCard";
import TextCard from "../../components/TextCard/TextCard";
import { Flex } from "../../styled/Flex";

const AboutMissionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 62px 0 0 0;
`;

type AboutMissionProps = {
  title: string;
  description: string;
  funds: {
    name: string;
    title: string;
    image?: string;
  }[];
};

const AboutMission = (props: AboutMissionProps) => {
  const { title, description, funds } = props;
  return (
    <AboutMissionWrapper>
      <TextCard title={title} description={description} file />
      <Flex width="100%" margin="96px 0 0 0">
        {funds.map((el, i) => (
          <FundCard name={el.name} title={el.title} image={el.image} />
        ))}
      </Flex>
    </AboutMissionWrapper>
  );
};

export default AboutMission;
