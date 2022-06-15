import styled, { DefaultTheme } from "styled-components";
import { devices } from "../../constants/mediaConstants";
import { checkMobileBrowser } from "../../helpers";

const InfoBlockWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.08));
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  @media ${devices.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width: 100%;
  }
`;

type InfoItemProps = {
  position: string;
  theme: DefaultTheme;
  noBorder?: boolean;
  borderTop?: boolean;
};

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 77px;
  padding: 16px 24px;
  border-left: ${(props: InfoItemProps) =>
    props.noBorder ? "0" : `1px solid rgba(0, 0, 0, 0.12)`};
  border-top: ${(props: InfoItemProps) =>
    props.borderTop ? `1px solid rgba(0, 0, 0, 0.12)` : "0"};
  box-sizing: border-box;
  @media ${devices.tablet} {
    padding: 0;
    align-items: center;
  }
`;

const BlockTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.black};
`;

const BlockValue = styled.div`
  margin-top: 5px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.black};
  white-space: nowrap;
`;

const InfoBlock = () => {
  const isMobile = checkMobileBrowser();
  return (
    <InfoBlockWrapper>
      <InfoItem position="first" noBorder>
        <BlockTitle>Date Created</BlockTitle>
        <BlockValue>22 Aug, 2022</BlockValue>
      </InfoItem>
      <InfoItem position="second">
        <BlockTitle>Items</BlockTitle>
        <BlockValue>10000</BlockValue>
      </InfoItem>
      <InfoItem position="third" noBorder={isMobile} borderTop={isMobile}>
        <BlockTitle>Total Volume</BlockTitle>
        <BlockValue>99999.999 ETH</BlockValue>
      </InfoItem>
      <InfoItem position="last" borderTop={isMobile}>
        <BlockTitle>Category</BlockTitle>
        <BlockValue>Category Name</BlockValue>
      </InfoItem>
    </InfoBlockWrapper>
  );
};

export default InfoBlock;
