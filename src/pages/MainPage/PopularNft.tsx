import styled from "styled-components";
import NftCard from "../../components/NftCard/NftCard";
import Slider from "../../components/Slider/Slider";
import { Flex } from "../../styled/Flex";
import { PrimaryButton } from "../../styled/PrimaryButton";
import { devices } from "../../constants/mediaConstants";
import ScreenSize from "../../helpers/ScreenSize";

type PopularNftProps = {
  nfts: any[];
};

const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-weight: 700;
  font-size: 34px;
  @media ${devices.tablet} {
    font-size: 20px;
  }
`;
const ShowAllButton = styled(PrimaryButton)`
  font-size: 16px;
  height: 36px;
  color: ${({ theme }) => theme.colors.primaryColor};
  background: ${({ theme }) => theme.colors.secondaryPrimary};
  @media ${devices.tablet} {
    background: none;
  }
`;

export default function PopularNft({ nfts }: PopularNftProps) {
  const { isMobile } = ScreenSize();
  return (
    <>
      <Flex justifyContent="space-between" alignItems="center" margin="10px 0">
        <Title>Popular NFT</Title>
        <ShowAllButton>Show All</ShowAllButton>
      </Flex>
      <Slider withoutButton={isMobile} howToShow={4}>
        {nfts.map(({ id, name, logoNft, image, likes, rating, price }) => (
          <NftCard
            name={name}
            image={image}
            logoNft={logoNft}
            likes={likes}
            rating={rating}
            price={price}
            key={id}
          />
        ))}
      </Slider>
    </>
  );
}
