import styled from "styled-components";
import { JoinPanel } from "../../components/JoinPanel/JoinPanel";
import BigNftCard from "../../components/NftCard/BigNftCard";
import { Steps } from "../../components/StepsLine";
import { Table } from "../../components/Table/Table";
import TextCard from "../../components/TextCard/TextCard";
import { Flex } from "../../styled/Flex";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 62px 0 0 0;
`;

type StepProps = {
  id: number;
  title: string;
  date: string;
  status: string;
};

type DropNameProps = {
  title: string;
  description: string;
  steps: StepProps[];
  nfts: { id: number; dropStatus: string; date?: number }[];
};

const DropName = (props: DropNameProps) => {
  const { title, description, steps, nfts } = props;
  return (
    <Wrapper>
      <TextCard title={title} description={description} />
      <Flex flexDirection="column" gap="96px" margin="96px 0 0 0">
        {nfts.map((el, i) => (
          <BigNftCard
            isEven={i % 2 !== 0}
            dropStatus={el.dropStatus}
            date={el.date}
          />
        ))}
      </Flex>
      <Steps steps={steps} />
      <JoinPanel />
    </Wrapper>
  );
};

export default DropName;
