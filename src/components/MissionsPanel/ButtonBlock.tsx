import styled, { DefaultTheme } from "styled-components";
import { PrimaryButton } from "../../styled/PrimaryButton";
import Bell from "../../assets/icons/bellIcon.svg";
import Connect from "../../assets/icons/connectIcon.svg";
import Share from "../../assets/icons/shareIcon.svg";
import Dots from "../../assets/icons/dotsIcon.svg";

const Block = styled.div`
  display: flex;
  filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.08));
  position: relative;
  z-index: 1000;
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

const DotsMenu = styled.div`
  position: absolute;
  right: 0;
  bottom: -116px;
  width: 150px;
  padding: 8px 0px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.24);
  border-radius: 12px;
  z-index: 1000;
`;

type MenuItemProps = {
  theme: DefaultTheme;
  red?: boolean;
};

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  font-family: ${({ theme }: MenuItemProps) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme, red }: MenuItemProps) =>
    red ? theme.colors.red : theme.colors.black};
`;

type ButtonBlockProps = {
  showNotification: (value: boolean) => void;
  showMenu: boolean;
  setShowMenu: (value: boolean) => void;
};
const ButtonBlock = (props: ButtonBlockProps) => {
  const { showNotification, showMenu, setShowMenu } = props;
  return (
    <Block>
      <Button>
        <ButtonIcon image={Connect} />
      </Button>
      <Button>
        <ButtonIcon image={Share} />
      </Button>
      <Button onClick={() => showNotification(true)}>
        <ButtonIcon image={Bell} />
        <ButtonText>Subscribe</ButtonText>
      </Button>
      <Button
        onClick={(e) => {
          e.stopPropagation();
          setShowMenu(true);
        }}
      >
        <ButtonIcon image={Dots} />
      </Button>
      {showMenu && (
        <DotsMenu>
          <MenuItem>Mission’s terms</MenuItem>
          <MenuItem red>Report</MenuItem>
        </DotsMenu>
      )}
    </Block>
  );
};

export default ButtonBlock;
