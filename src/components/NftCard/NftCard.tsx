import styled, { DefaultTheme } from "styled-components";
import { Flex } from "../../styled/Flex";
import QrCode from "../../assets/image/qrCodeNft.svg";
import WalletNft from "../../assets/image/walletNft.svg";
import LikeIcon from "../../assets/icons/like.svg";
import FireIcon from "../../assets/icons/fireIconNft.svg";
import { PrimaryButton } from "../../styled/PrimaryButton";
import DoubleImage from "../DoubleImage/DoubleImage";
import { devices } from "../../constants/mediaConstants";
import Timer from "../Timer/Timer";

type NftProps = {
  name: string;
  logoNft: string;
  image?: string[];
  likes: number;
  rating: number;
  price: string;
  bigButton?: boolean;
  status?: string;
  date?: number;
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
  width: 280px;
  height: 330px;
  border-radius: 12px;
  background-image: url(${(props: { image: string }) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media ${devices.mobile} {
    max-width: 100%;
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

type ButtonProps = {
  theme: DefaultTheme;
  bigButton?: boolean;
};

const BuyButton = styled(PrimaryButton)`
  padding: 0;
  width: ${(props: ButtonProps) => (props.bigButton ? "100%" : "154px")};
  height: 40px;
  color: ${(props: ButtonProps) => props.theme.colors.primaryColor};
  background: ${(props: ButtonProps) => props.theme.colors.secondaryPrimary};
  box-sizing: border-box;
`;

const NotForSaleButton = styled(PrimaryButton)`
  height: 40px;
  width: ${(props: ButtonProps) => (props.bigButton ? "100%" : "154px")};
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
  box-sizing: border-box;
`;

const renderButton = (status: string, date?: number, bigButton?: boolean) => {
  switch (status) {
    case "dropStart":
      return <BuyButton bigButton={bigButton}>Buy 0.009 ETH</BuyButton>;
    case "dropPending":
      return (
        <Timer
          secondary
          text={"Drop sales start in {timer}"}
          date={date ? date : 0}
        />
      );
    case "notForSale":
      return (
        <NotForSaleButton bigButton={bigButton}>Not for Sale</NotForSaleButton>
      );
    default:
      return null;
  }
};

export default function NftCard({
  name,
  logoNft,
  image,
  likes,
  rating,
  price,
  bigButton,
  status,
  date,
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
          {status ? (
            renderButton(status, date, bigButton)
          ) : (
            <BuyButton bigButton={bigButton}>Buy 0.009 ETH</BuyButton>
          )}
          {image && (
            <DoubleImage
              firstImage={image[0]}
              secondImage={image[1]}
              size="40px"
              side="right"
            />
          )}
        </Flex>
      </Flex>
    </Wrapper>
  );
}
