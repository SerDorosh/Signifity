import styled from "styled-components";
import { Flex } from "../../styled/Flex";
import { PrimaryButton } from "../../styled/PrimaryButton";
import IntroducingImage from "../../assets/image/introducingSigniftyCoin.svg";

const Wrapper = styled.div`
  margin: 100px 50px;
  width: 100%;
  height: 480px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.gray};
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: flex-start;
`;
const ImageComponent = styled.div`
position: relative;
  width: 480px;
  height: 500.69px;
  bottom:90px;
  left: 110px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props: { image: string }) => props.image});
`;
const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  margin: 0;
  white-space: pre-line;
  color: ${({ theme }) => theme.colors.black};
`;
const SubTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.lightBlack};
`;
const LearnMoreButton = styled(PrimaryButton)`
  background: ${({ theme }) => theme.colors.secondaryPrimary};
  color: ${({ theme }) => theme.colors.primaryColor};
  height: 40px;
  padding: 5px 60px;
`;
const BuyCoinButton = styled(PrimaryButton)`
  height: 40px;
  padding: 5px 60px;
`;

export default function IntroducingSigniftyCoin() {
  return (
    <Wrapper>
      <ImageComponent image={IntroducingImage}></ImageComponent>
      <div>
        <Flex flexDirection="column" margin="0 0 40px 0">
          <Title>{`Introducing \n Signifty Coin`}</Title>
          <SubTitle>Additional text</SubTitle>
        </Flex>
        <Flex justifyContent="space-between" gap={40} margin="0 0 40px 0">
          <LearnMoreButton>Learn More</LearnMoreButton>
          <BuyCoinButton>Buy Coin</BuyCoinButton>
        </Flex>
      </div>
    </Wrapper>
  );
}
