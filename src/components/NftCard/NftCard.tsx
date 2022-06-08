import styled from "styled-components";
import { Flex } from "../../styled/Flex";
import LikeIcon from "../../assets/icons/like.svg";
import FireIcon from "../../assets/icons/fireIconNft.svg";
import { PrimaryButton } from "../../styled/PrimaryButton";
import DoubleImage from "../DoubleImage/DoubleImage";

const Wrapper = styled.div`
  margin-top: 10px;
  padding: 25px;
  width: 342px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
`;
const NftImage = styled.div`
  height: 330px;
  border-radius: 12px;
  background: #f4f4f4;
`;
const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-weight: 700;
  font-size: 24px;
`;

const GrayText = styled(Title)`
  color: ${({ theme }) => theme.colors.lightBlack};
  font-size: 16px;
`;
const SpecialText = styled.span`
  color: ${({ theme }) => theme.colors.primaryColor};
  font-size: 16px;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.Roboto};
`;
const Text = styled(SpecialText)`
  color: ${({ theme }) => theme.colors.black};
`;
const LikeIconComponent = styled.div`
  width: 20px;
  height: 19px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props: { image: string }) => props.image});
`;
const FireIconComponent = styled.div`
  width: 13px;
  height: 15px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props: { image: string }) => props.image});
`;
const BuyButton = styled(PrimaryButton)`
  height: 40px;
  color: ${({ theme }) => theme.colors.primaryColor};
  background: ${({ theme }) => theme.colors.secondaryPrimary};
`;
export default function NftCard() {
  return (
    <Wrapper>
      <NftImage></NftImage>
      <Flex flexDirection="column" gap="25px">
        <Flex justifyContent="space-between" alignItems="center">
          <Title>NFT Title</Title>
          <Flex alignItems="center" gap="10px">
            <LikeIconComponent image={LikeIcon} />
            <GrayText>12</GrayText>
          </Flex>
        </Flex>
        <Flex gap="10px">
          <FireIconComponent image={FireIcon} />
          <SpecialText>Legendary</SpecialText>
          <Text> 1000/1000</Text>
        </Flex>
        <Flex justifyContent="space-between">
          <BuyButton>Buy 0.009 ETH</BuyButton>
          <DoubleImage
            size="40px"
            side="right"
            firstImage="https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg"
            secondImage="https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg"
          />
        </Flex>
      </Flex>
    </Wrapper>
  );
}
