import { useRef } from "react";
import styled from "styled-components";
import { JoinPanel } from "../../components/JoinPanel/JoinPanel";
import BigNftCard from "../../components/NftCard/BigNftCard";
import { Steps } from "../../components/StepsLine";
import TextCard from "../../components/TextCard/TextCard";
import { devices } from "../../constants/mediaConstants";
import { checkMobileBrowser } from "../../helpers";
import { Flex } from "../../styled/Flex";
import NftCard from "../../components/NftCard/NftCard";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 62px 0 0 0;
  @media ${devices.tablet} {
    align-items: center;
  }
`;

const ViewBlock = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  @media ${devices.tablet} {
    width: 100%;
    overflow-x: scroll;
  }
`;

const NFTList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 96px;
  margin: 96px 0 0 0;
  width: 100%;
  @media ${devices.tablet} {
    gap: 36px;
    width: fit-content;
  }
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
  nfts: {
    id: number;
    dropStatus: string;
    date?: number;
    name: string;
    image: string[];
    likes: number;
    rating: number;
    price: string;
    logoNft: string;
    description?: string;
  }[];
};

const DropName = (props: DropNameProps) => {
  const isMobile = checkMobileBrowser();
  const { title, description, steps, nfts } = props;
  const Ref = useRef<HTMLDivElement>(null);

  return (
    <Wrapper ref={Ref}>
      <TextCard title={title} description={description} />
      <NFTList>
        {nfts.map((el, i) => {
          return isMobile ? (
            <NftCard
              name={el.name}
              likes={el.likes}
              rating={el.rating}
              price={el.price}
              key={el.id}
              logoNft={el.logoNft}
              bigButton
              status={el.dropStatus}
            />
          ) : (
            <BigNftCard
              key={el.id}
              isEven={i % 2 !== 0}
              dropStatus={el.dropStatus}
              date={el.date}
              description={el.description}
            />
          );
        })}
      </NFTList>
      <ViewBlock>
        <Steps steps={steps} />
      </ViewBlock>
    </Wrapper>
  );
};

export default DropName;
