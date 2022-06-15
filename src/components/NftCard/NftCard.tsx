import styled from "styled-components";
import { Flex } from "../../styled/Flex";
import QrCode from "../../assets/image/qrCodeNft.svg";
import WalletNft from "../../assets/image/walletNft.svg";
import LikeIcon from "../../assets/icons/like.svg";
import FireIcon from "../../assets/icons/fireIconNft.svg";
import { PrimaryButton } from "../../styled/PrimaryButton";
import DoubleImage from "../DoubleImage/DoubleImage";
import { devices } from "../../constants/mediaConstants";

type NftProps = {
  name: string;
  logoNft: string;
  image: string[];
  likes: number;
  rating: number;
  price: string;
};

const Wrapper = styled.div`
  margin-top: 10px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  padding: 15px;
`;
const NftImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  width: 294px;
  height: 330px;
  border-radius: 12px;
  background-image: url(${(props: { image: string }) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media ${devices.mobile} {
    width: 264px;
  }
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
const QrCodeComponent = styled.div`
  cursor: pointer;
  width: 56px;
  height: 56px;
  margin: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props: { image: string }) => props.image});
`;
const WalletIconComponent = styled.div`
  cursor: pointer;
  width: 32px;
  height: 32px;
  margin: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props: { image: string }) => props.image});
`;
const LikeIconComponent = styled.div`
  cursor: pointer;
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
  padding: 0;
  width: 154px;
  height: 40px;
  color: ${({ theme }) => theme.colors.primaryColor};
  background: ${({ theme }) => theme.colors.secondaryPrimary};
`;
export default function NftCard({
  name,
  logoNft,
  image,
  likes,
  rating,
  price,
}: NftProps) {
  return (
    <Wrapper>
      <NftImage image={logoNft}>
        <QrCodeComponent image={QrCode} />
        <WalletIconComponent image={WalletNft} />
      </NftImage>
      <Flex flexDirection="column" gap="15px">
        <Flex justifyContent="space-between" alignItems="center">
          <Title>{name}</Title>
          <Flex alignItems="center" gap="10px">
            <LikeIconComponent image={LikeIcon} />
            <GrayText>{likes}</GrayText>
          </Flex>
        </Flex>
        <Flex gap="10px">
          <FireIconComponent image={FireIcon} />
          <SpecialText>Legendary</SpecialText>
          <Text> {rating}/1000</Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <BuyButton>Buy {price}</BuyButton>
          <DoubleImage
            firstImage={image[0]}
            secondImage={image[1]}
            size="40px"
            side="right"
          />
        </Flex>
      </Flex>
    </Wrapper>
  );
}
