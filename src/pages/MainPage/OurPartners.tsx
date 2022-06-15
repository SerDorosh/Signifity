import styled from "styled-components";
import { devices } from "../../constants/mediaConstants";
import { Flex } from "../../styled/Flex";

type OurPartnersProps = {
  index: number;
  theme: any;
};
const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 10px;
  flex-wrap: wrap;
  @media ${devices.mobile} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 20px;
  }
`;
const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 36px;
`;
const PartnerWindow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 126px;
  font-weight: 700;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.gray};
  @media ${devices.mobile} {
    width: 144px;
    height: 90px;
  }
`;

export default function OurPartners() {
  const ourPartners = [
    { id: 1, logo: "Logo" },
    { id: 2, logo: "Logo" },
    { id: 3, logo: "Logo" },
    { id: 4, logo: "Logo" },
    { id: 5, logo: "Logo" },
    { id: 6, logo: "Logo" },
  ];
  return (
    <>
      <Flex margin="10px 0">
        <Title>Our Partners</Title>
      </Flex>
      <LogoWrapper>
        {ourPartners.map(({ id, logo }) => (
          <PartnerWindow key={id + id}>{logo}</PartnerWindow>
        ))}
      </LogoWrapper>
    </>
  );
}
