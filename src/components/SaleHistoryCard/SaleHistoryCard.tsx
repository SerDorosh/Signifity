import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 282px;
  height: 264px;
  background: #ffffff;
  border-radius: 12px;
  padding: 16px 16px 12px;
  box-sizing: border-box;
`;

const Header = styled.div`
  display: flex;
  gap: 16px;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.12);
  align-items: center;
  padding-bottom: 16px;
`;

const NFTImage = styled.div`
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props: { image: string }) => props.image});
  border-radius: 4px;
`;

const NFTTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

const BoldText = styled.div`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
`;

const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
`;

const DataBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

type SaleHistoryCardProps = {
  image: string;
  name: string;
  buyerName: string;
  salePrice: string;
  amount: number;
  dateTime: string;
};

const SaleHistoryCard = (props: SaleHistoryCardProps) => {
  const { image, name, buyerName, salePrice, amount, dateTime } = props;
  return (
    <Card>
      <Header>
        <NFTImage image={image} />
        <NFTTitle>{name}</NFTTitle>
      </Header>
      <DataBlock>
        <Title>Buyer</Title>
        <BoldText>{buyerName}</BoldText>
      </DataBlock>
      <DataBlock>
        <Title>Sale Price</Title>
        <BoldText>{salePrice}</BoldText>
      </DataBlock>
      <DataBlock>
        <Title>Amount</Title>
        <BoldText>{amount}</BoldText>
      </DataBlock>
      <DataBlock>
        <Title>Date /Time</Title>
        <BoldText>{dateTime}</BoldText>
      </DataBlock>
    </Card>
  );
};

export default SaleHistoryCard;
