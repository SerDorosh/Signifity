import styled from "styled-components";
import { Flex } from "../../styled/Flex";
import DefaultIcon from "../../assets/icons/defaultFundIcon.svg";

const Card = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 242px;
`;

const FondIcon = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 16px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${(props: { image: string }) => props.image});
`;

const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.lightBlack};
`;

const FundName = styled.div`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.black};
`;

type FundCardProps = {
  name: string;
  title: string;
  image?: string;
};

const FundCard = (props: FundCardProps) => {
  const { name, title, image } = props;
  return (
    <Card>
      <FondIcon image={image ? image : DefaultIcon} />
      <Flex flexDirection="column">
        <Title>{title}</Title>
        <FundName>{name}</FundName>
      </Flex>
    </Card>
  );
};

export default FundCard;
