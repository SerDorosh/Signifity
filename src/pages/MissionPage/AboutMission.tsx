import { useRef } from "react";
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

const ViewBlock = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  @media ${devices.tablet} {
    width: ${({ width }: { width?: number }) =>
      width ? `${width}px` : "100%"};
    overflow-x: scroll;
  }
`;

const FundsBlock = styled.div`
  display: flex;
  gap: 24px;
  margin: 96px 0 0 0;
  width: fit-content;
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
  const AboutMissionRef = useRef<HTMLDivElement>(null);
  return (
    <AboutMissionWrapper ref={AboutMissionRef}>
      <TextCard title={title} description={description} file />
      <ViewBlock width={AboutMissionRef?.current?.clientWidth}>
        <FundsBlock>
          {funds.map((el, i) => (
            <FundCard
              key={i}
              name={el.name}
              title={el.title}
              image={el.image}
            />
          ))}
        </FundsBlock>
      </ViewBlock>
    </AboutMissionWrapper>
  );
};

export default AboutMission;
