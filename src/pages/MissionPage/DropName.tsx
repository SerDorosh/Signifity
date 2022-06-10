import styled from "styled-components";
import BigNftCard from "../../components/NftCard/BigNftCard";
import { Steps } from "../../components/StepsLine";
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
  nfts: { id: number }[];
};

const DropName = (props: DropNameProps) => {
  const { title, description, steps, nfts } = props;
  return (
    <Wrapper>
      <TextCard title={title} description={description} />
      <Flex flexDirection="column" gap="96px">
        {nfts.map((el, i) => (
          <BigNftCard isEven={i % 2 != 0} />
        ))}
      </Flex>
      <Steps steps={steps} />
    </Wrapper>
  );
};

export default DropName;
