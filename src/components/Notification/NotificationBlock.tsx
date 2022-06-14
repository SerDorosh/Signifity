import styled from "styled-components";
import { Flex } from "../../styled/Flex";
import Close from "../../assets/icons/closeIcon.svg";
import { useEffect } from "react";

const NotificationWrapper = styled.div`
  position: fixed;
  top: 110px;
  right: 32px;
  width: 440px;
  padding: 16px 24px;
  background: #ffffff;
  box-shadow: 0px 24px 24px rgba(0, 0, 0, 0.24);
  border-radius: 12px;
  z-index: 1000;


  animation-duration: 1s;
  animation-name: scale;

  @-webkit-keyframes enter {
    0% {
      opacity: 0;
    
    100% {
      opacity: 1;
      
    }
  }
`;

const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
`;

const Description = styled.div`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.lightBlack};
`;

const CloseButton = styled.div`
  width: 10px;
  height: 10px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props: { image: string }) => props.image});
  cursor: pointer;
`;

const OtherText = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.primaryColor};
`;

type NotificationBlockProps = {
  title: string;
  description: string;
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  otherText?: string;
};

const NotificationBlock = (props: NotificationBlockProps) => {
  const { title, description, isOpen, setIsOpen, otherText } = props;

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 3000);
  }, []);

  return (
    <NotificationWrapper>
      <Flex justifyContent="space-between">
        <Title>{title}</Title>
        <Flex>
          <CloseButton image={Close} onClick={() => setIsOpen(false)} />
        </Flex>
      </Flex>
      <Description>{description}</Description>
      {otherText && <OtherText>Drop sale start in 00:00:00:00</OtherText>}
    </NotificationWrapper>
  );
};

export default NotificationBlock;
