import styled from "styled-components";
import { Flex } from "../../styled/Flex";
import ThanksIcon from "../../assets/icons/thanksIcon.svg";

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.04);
  border-radius: 12px;
  padding: 24px;
  margin: 96px 0;
`;

const MagicIcon = styled.div`
  width: 56px;
  height: 55px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props: { image: string }) => props.image});
`;

const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 36px;
  color: ${({ theme }) => theme.colors.black};
`;

const Description = styled.div`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.lightBlack};
`;

const ThanksBlock = () => {
  return (
    <Wrapper>
      <Flex alignItems="center" gap="24px" margin="0 0 24px 0">
        <MagicIcon image={ThanksIcon} />
        <Title>Thank you guys! You are the best!</Title>
      </Flex>
      <Description>
        We have collected the entire amount and now we begin our work. We are
        very grateful to you for participating in the mission. You are super!
      </Description>
    </Wrapper>
  );
};

export default ThanksBlock;
