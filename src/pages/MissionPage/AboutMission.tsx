import styled from "styled-components";
import FundCard from "../../components/FundCard/FundCard";
import TextCard from "../../components/TextCard/TextCard";
import { devices } from "../../constants/mediaConstants";
import { Flex } from "../../styled/Flex";

const AboutMissionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 62px 0 0 0;
`;

const FundsBlock = styled.div`
  display: flex;
  width: 100%;
  margin: 96px 0 0 0;
  @media ${devices.tablet} {
    width: 100px;
    overflow-x: auto;
  }
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
      <FundsBlock>
        {funds.map((el, i) => (
          <FundCard key={i} name={el.name} title={el.title} image={el.image} />
        ))}
      </FundsBlock>
    </AboutMissionWrapper>
  );
};

export default AboutMission;
