import styled from "styled-components";
import { Flex } from "../../styled/Flex";
import LikeIcon from "../../assets/icons/like.svg";
import FireIcon from "../../assets/icons/fireIconNft.svg";
import { PrimaryButton } from "../../styled/PrimaryButton";
import QrCode from "../../assets/image/qrCodeNft.svg";
import WalletNft from "../../assets/image/walletNft.svg";
import Connect from "../../assets/icons/connectIcon.svg";
import TextCard from "../TextCard/TextCard";
import Timer from "../Timer/Timer";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-column-gap: 56px;
  grid-template-areas: ${(props: { isEven?: boolean }) =>
    props.isEven ? `"b a"` : `"a b"`};
`;

const ImageWrapper = styled.div`
  margin-top: 10px;
  padding: 25px;
  width: 342px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  box-sizing: border-box;
  grid-area: a;
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-area: b;
`;
const NftImage = styled.div`
  height: 464px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 10px;
  border-radius: 12px;
  background: #f4f4f4;
`;
const Title = styled.div`
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
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.primaryColor};
`;

const Button = styled(PrimaryButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background: ${({ theme }) => theme.colors.opacityBlack};
  color: ${({ theme }) => theme.colors.primaryColor};
  box-sizing: border-box;
`;

const ButtonIcon = styled.div`
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${(props: { image: string }) => props.image});
`;

const ButtonText = styled.div`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.black};
`;

const QrCodeComponent = styled.div`
  cursor: pointer;
  width: 56px;
  height: 56px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props: { image: string }) => props.image});
`;
const WalletIconComponent = styled.div`
  cursor: pointer;
  width: 56px;
  height: 56px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props: { image: string }) => props.image});
`;

const NotForSaleButton = styled(PrimaryButton)`
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
`;

type NftCardProps = {
  isBig?: boolean;
  isEven?: boolean;
  description?: string;
  dropStatus: string;
  date?: number;
};

const renderButton = (status: string, date?: number) => {
  switch (status) {
    case "dropStart":
      return <BuyButton>Buy 0.009 ETH</BuyButton>;
    case "dropPending":
      return (
        <Timer
          secondary
          text={"Drop sales start in {timer}"}
          date={date ? date : 0}
        />
      );
    case "notForSale":
      return <NotForSaleButton>Not for Sale</NotForSaleButton>;
    default:
      return null;
  }
};

export default function BigNftCard(props: NftCardProps) {
  const { description, isEven, dropStatus, date } = props;
  return (
    <Wrapper isEven={isEven}>
      <ImageWrapper>
        <NftImage>
          <QrCodeComponent image={QrCode} />
          <WalletIconComponent image={WalletNft} />
        </NftImage>
      </ImageWrapper>
      <InfoWrapper>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          margin="0 0 8px 0"
        >
          <Title>NFT Title</Title>
          <Flex alignItems="center" gap="10px">
            <LikeIconComponent image={LikeIcon} />
            <GrayText>12</GrayText>
          </Flex>
        </Flex>
        <Flex gap="10px">
          <FireIconComponent image={FireIcon} />
          <SpecialText>Legendary</SpecialText>
        </Flex>
        {description && <TextCard description={description} />}
        <Flex margin="24px 0 56px" justifyContent="space-between">
          <Button>
            <ButtonText>999 of 1k available </ButtonText>
          </Button>
          <Button>
            <ButtonIcon image={Connect} />
          </Button>
        </Flex>
        {renderButton(dropStatus, date)}
      </InfoWrapper>
    </Wrapper>
  );
}
