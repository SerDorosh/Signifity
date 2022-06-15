import { useRef } from "react";
import styled from "styled-components";
import SaleHistoryCard from "../../components/SaleHistoryCard/SaleHistoryCard";
import { Table } from "../../components/Table/Table";
import { devices } from "../../constants/mediaConstants";
import { checkMobileBrowser } from "../../helpers";
import { Flex } from "../../styled/Flex";
import Layout from "../../styled/Layout";
import { PrimaryButton } from "../../styled/PrimaryButton";

const Wrapper = styled.div`
  width: 100%;
  padding-bottom: 36px;
  background: ${({ theme }) => theme.colors.gray};
  @media ${devices.tablet} {
  }
`;

const Content = styled(Layout)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  @media ${devices.tablet} {
    max-width: 720px;
    margin: 24px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const Title = styled.div`
  margin: 34px 0;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 36px;
  @media ${devices.tablet} {
    font-size: 20px;
    line-height: 30px;
  }
`;

const ShowAllButton = styled(PrimaryButton)`
  font-size: 16px;
  height: 36px;
  color: ${({ theme }) => theme.colors.primaryColor};
  background: ${({ theme }) => theme.colors.secondaryPrimary};
`;

const ViewBlock = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
  @media ${devices.tablet} {
    width: ${({ width }: { width?: number }) =>
      width ? `${width}px` : "100%"};
    overflow-x: scroll;
  }
`;

type Data = {
  id: number;
  nft: {
    name: string;
    image: string;
  };
  buyer: {
    avatar: string;
    name: string;
  };
  salePrice: string;
  amount: number;
  dateTime: string;
};

type SaleHistoryProps = {
  tableData: Data[];
};

const SaleHistory = (props: SaleHistoryProps) => {
  const { tableData } = props;
  const Ref = useRef<HTMLDivElement>(null);
  const isMobile = checkMobileBrowser();

  return (
    <Wrapper>
      <Content>
        <CardHeader ref={Ref}>
          <Title>Sale History</Title>
          <ShowAllButton>Show All</ShowAllButton>
        </CardHeader>
        {!isMobile ? (
          <Table data={tableData} />
        ) : (
          <ViewBlock width={Ref?.current?.clientWidth}>
            <Flex width="fit-content" gap="10px">
              {tableData.map((el, i) => (
                <SaleHistoryCard
                  key={el.id}
                  image={el.nft.image}
                  name={el.nft.name}
                  buyerName={el.buyer.name}
                  salePrice={el.salePrice}
                  amount={el.amount}
                  dateTime={el.dateTime}
                />
              ))}
            </Flex>
          </ViewBlock>
        )}
      </Content>
    </Wrapper>
  );
};

export default SaleHistory;
