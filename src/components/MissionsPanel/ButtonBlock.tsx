import styled from "styled-components";
import { PrimaryButton } from "../../styled/PrimaryButton";
import Bell from "../../assets/icons/bellIcon.svg";
import Connect from "../../assets/icons/connectIcon.svg";
import Share from "../../assets/icons/shareIcon.svg";
import Dots from "../../assets/icons/dotsIcon.svg";

const Block = styled.div`
  display: flex;
  filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.08));
`;

const Button = styled(PrimaryButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 24px;
  padding: 16px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primaryColor};
  box-sizing: border-box;
`;

const ButtonIcon = styled.div`
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${(props: { image: string }) => props.image});
`;

const ButtonText = styled.div`
  margin-left: 14px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.primaryColor};
`;

const ButtonBlock = () => {
  return (
    <Block>
      <Button>
        <ButtonIcon image={Connect} />
      </Button>
      <Button>
        <ButtonIcon image={Share} />
      </Button>
      <Button>
        <ButtonIcon image={Bell} />
        <ButtonText>Subscribe</ButtonText>
      </Button>
      <Button>
        <ButtonIcon image={Dots} />
      </Button>
    </Block>
  );
};

export default ButtonBlock;
