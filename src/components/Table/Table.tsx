import { useEffect, useState } from "react";
import styled, { DefaultTheme } from "styled-components";
import { Flex } from "../../styled/Flex";
import Arrow from "../../assets/icons/arrow.svg";

const TableWrapper = styled.table`
  background: #ffffff;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  border-collapse: collapse;
`;

const Header = styled.th`
  padding: 8px 16px 8px 24px;
  text-align: left;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;
const TableData = styled.td`
  width: 288px;
  padding: 8px 16px 8px 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
`;
const TableNFTData = styled.td`
  width: 288px;
  padding: 8px 16px 8px 24px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  border-right: 1px solid rgba(0, 0, 0, 0.12);
`;

const TableRow = styled.tr`
  height: 88px;
`;

const HeaderRow = styled.tr`
  height: 56px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props: { image: string }) => props.image});
  border-radius: 50%;
`;

const NFTImage = styled.div`
  width: 56px;
  height: 56px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props: { image: string }) => props.image});
  border-radius: 4px;
`;

const BoldText = styled.div`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

const SortedArrow = styled.div`
  width: 12px;
  height: 8px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props: { image: string; isGrowth?: boolean }) =>
    props.image});
  border-radius: 4px;
  cursor: pointer;
  transform: rotate(
    ${(props: { image: string; isGrowth?: boolean }) =>
      props.isGrowth ? "180deg" : "0deg"}
  );
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

type TableProps = {
  data: Data[];
};

export const Table = (props: TableProps) => {
  const { data } = props;
  const [tableData, setTableData] = useState<Data[]>();
  const [typeSort, setTypeSort] = useState(false);
  useEffect(() => {
    setTableData(data);
  }, []);

  const sortArray = (array: Data[], isGrowth: boolean) => {
    if (isGrowth) {
      setTableData(
        array.sort((a, b) => {
          const aDate = new Date(a.dateTime);
          const bDate = new Date(b.dateTime);
          if (aDate > bDate) {
            return -1;
          }
          if (bDate > aDate) {
            return 1;
          }
          return 0;
        })
      );
    } else {
      setTableData(
        array.sort((a, b) => {
          const aDate = new Date(a.dateTime);
          const bDate = new Date(b.dateTime);
          if (bDate > aDate) {
            return -1;
          }
          if (aDate > bDate) {
            return 1;
          }
          return 0;
        })
      );
    }
  };

  return (
    <TableWrapper>
      <HeaderRow>
        <Header>NFT</Header>
        <Header>Buyer</Header>
        <Header>Sale Price</Header>
        <Header>Amount</Header>
        <Header>
          <Flex alignItems="center" gap="12px">
            Date Time
            <SortedArrow
              image={Arrow}
              isGrowth={typeSort}
              onClick={() => {
                setTypeSort(!typeSort);
                sortArray(tableData as Data[], typeSort);
              }}
            />
          </Flex>
        </Header>
      </HeaderRow>
      {tableData?.length &&
        tableData.map((el) => {
          return (
            <TableRow key={el.id}>
              <TableNFTData>
                <Flex alignItems="center" gap="12px">
                  <NFTImage image={el.nft.image} />
                  <BoldText>{el.nft.name}</BoldText>
                </Flex>
              </TableNFTData>
              <TableData>
                <Flex alignItems="center" gap="12px">
                  <Avatar image={el.buyer.avatar} />
                  <BoldText>{el.buyer.name}</BoldText>
                </Flex>
              </TableData>
              <TableData>{el.salePrice}</TableData>
              <TableData>{el.amount}</TableData>
              <TableData>{el.dateTime}</TableData>
            </TableRow>
          );
        })}
    </TableWrapper>
  );
};
