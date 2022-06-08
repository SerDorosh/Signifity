import styled from "styled-components";
import NftCard from "../../components/NftCard/NftCard";
import { Flex } from "../../styled/Flex";
import { PrimaryButton } from "../../styled/PrimaryButton";

type PopularNftProps = {
  nfts: any[];
};

const Wrapper = styled.div`
  margin: 0 50px;
`;

const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-weight: 700;
  font-size: 34px;
`;
const ShowAllButton = styled(PrimaryButton)`
  font-size: 16px;
  height: 36px;
  color: ${({ theme }) => theme.colors.primaryColor};
  background: ${({ theme }) => theme.colors.secondaryPrimary};
`;

export default function PopularNft({ nfts }: PopularNftProps) {
  return (
    <Wrapper>
      <Flex justifyContent="space-between">
        <Title>Popular NFT</Title><ShowAllButton>Show All</ShowAllButton>
      </Flex>
      <Flex gap="20px">
        {nfts.map(() => (
          <NftCard />
        ))}
      </Flex>
    </Wrapper>
  );
}
