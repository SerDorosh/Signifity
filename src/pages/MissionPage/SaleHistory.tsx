import styled from "styled-components";
import { Table } from "../../components/Table/Table";
import { devices } from "../../constants/mediaConstants";
import Layout from "../../styled/Layout";
import { PrimaryButton } from "../../styled/PrimaryButton";

const Wrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.gray};
  @media ${devices.tablet} {
    display: none;
  }
`;

const Content = styled(Layout)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1440px;
  @media ${devices.tablet} {
    max-width: 720px;
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
`;

const ShowAllButton = styled(PrimaryButton)`
  font-size: 16px;
  height: 36px;
  color: ${({ theme }) => theme.colors.primaryColor};
  background: ${({ theme }) => theme.colors.secondaryPrimary};
`;

type SaleHistoryProps = {
  tableData: any;
};

const SaleHistory = (props: SaleHistoryProps) => {
  const { tableData } = props;
  return (
    <Wrapper>
      <Content>
        <CardHeader>
          <Title>Sale History</Title>
          <ShowAllButton>Show All</ShowAllButton>
        </CardHeader>
        <Table data={tableData} />
      </Content>
    </Wrapper>
  );
};

export default SaleHistory;
