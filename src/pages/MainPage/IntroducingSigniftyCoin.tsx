import styled from "styled-components";
import { Flex } from "../../styled/Flex";
import { PrimaryButton } from "../../styled/PrimaryButton";
import IntroducingImage from "../../assets/image/introducingSigniftyCoin.svg";
import { devices } from "../../constants/mediaConstants";

const Wrapper = styled.div`
  margin: 200px 0px;
  height: 480px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.gray};
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media ${devices.laptop} {
    border-radius: 0px;
    margin: 70px 0px;
    width: 100%;
    height: 100%;
    grid-template-columns: 1fr;
    grid-template-rows: 200px 282px;
  }
`;
const ImageComponent = styled.div`
  position: relative;
  width: 480px;
  bottom: 90px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props: { image: string }) => props.image});
  left: auto;
  margin: 0 auto;
  @media ${devices.laptop} {
    margin: 0 auto;
    width: 310px;
    height: 323.36px;
    left: 0px;
  }
`;
const TitleAndButtonCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-bottom: 40px;
  @media ${devices.laptop} {
    align-items: center;
    font-size: 34px;
    margin-bottom: 30px;
    justify-content: end;
  }
`;
const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  @media ${devices.laptop} {
    margin-bottom: 20px;
  }
`;
const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  margin: 0;
  white-space: pre-line;
  color: ${({ theme }) => theme.colors.black};
  @media ${devices.laptop} {
    font-size: 34px;
    text-align: center;
  }
`;
const SubTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.lightBlack};
  @media ${devices.laptop} {
    font-size: 16px;
    text-align: center;
  }
`;
const LearnMoreButton = styled(PrimaryButton)`
  background: ${({ theme }) => theme.colors.secondaryPrimary};
  color: ${({ theme }) => theme.colors.primaryColor};
  height: 40px;
  padding: 5px 60px;
  @media ${devices.laptop} {
    text-align: center;
    padding: 0px 35px;
    width: 100%;
  }
`;
const BuyCoinButton = styled(PrimaryButton)`
  height: 40px;
  padding: 5px 60px;
  @media ${devices.laptop} {
    text-align: center;
    padding: 0px 35px;
  }
`;

export default function IntroducingSigniftyCoin() {
  return (
    <Wrapper>
      <ImageComponent image={IntroducingImage}></ImageComponent>
      <TitleAndButtonCell>
        <TextWrapper>
          <Title>{`Introducing \n Signifty Coin`}</Title>
          <SubTitle>Additional text</SubTitle>
        </TextWrapper>
        <Flex justifyContent="space-between" gap={40}>
          <LearnMoreButton>Learn More</LearnMoreButton>
          <BuyCoinButton>Buy Coin</BuyCoinButton>
        </Flex>
      </TitleAndButtonCell>
    </Wrapper>
  );
}
