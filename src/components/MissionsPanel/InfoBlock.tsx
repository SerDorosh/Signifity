import styled, { DefaultTheme } from "styled-components";

const InfoBlockWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 77px;
  filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.08));
`;

const getBorderRadius = (position?: string) => {
  switch (position) {
    case "first":
      return "12px 0px 0px 12px";
    case "last":
      return "0px 12px 12px 0px";
    default:
      return "0";
  }
};

type InfoItemProps = {
  position: string;
  theme: DefaultTheme;
  noBorder?: boolean;
};

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  padding: 16px 24px;
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${(props: InfoItemProps) => getBorderRadius(props.position)};
  box-shadow: ${(props: InfoItemProps) =>
    props.noBorder ? "" : `inset 1px 0px 0px rgba(0, 0, 0, 0.12)`};

  box-sizing: border-box;
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
`;

const InfoBlock = () => {
  return (
    <InfoBlockWrapper>
      <InfoItem position="first" noBorder>
        <BlockTitle>Date Created</BlockTitle>
        <BlockValue>22 Aug, 2022</BlockValue>
      </InfoItem>
      <InfoItem position="center">
        <BlockTitle>Items</BlockTitle>
        <BlockValue>10000</BlockValue>
      </InfoItem>
      <InfoItem position="center">
        <BlockTitle>Total Volume</BlockTitle>
        <BlockValue>99999.999 ETH</BlockValue>
      </InfoItem>
      <InfoItem position="last">
        <BlockTitle>Category</BlockTitle>
        <BlockValue>Category Name</BlockValue>
      </InfoItem>
    </InfoBlockWrapper>
  );
};

export default InfoBlock;
