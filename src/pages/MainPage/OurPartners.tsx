import styled, { DefaultTheme } from "styled-components";
import { Flex } from "../../styled/Flex";

type OurPartnersProps = {
  index: number;
  theme: any;
};
const OurPartnersWrapper = styled.div`
  margin: 100px 50px;
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
  width: 226.67px;
  height: 126px;
  font-weight: 700;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.gray}; ;
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
    <OurPartnersWrapper>
      <Flex margin="10px 0">
        <Title>Our Partners</Title>
      </Flex>
      <Flex justifyContent="space-around" gap="20px">
        {ourPartners.map(({ id, logo }) => (
          <PartnerWindow key={id + id}>{logo}</PartnerWindow>
        ))}
      </Flex>
    </OurPartnersWrapper>
  );
}
