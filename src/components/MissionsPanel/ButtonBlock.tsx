import styled, { DefaultTheme } from "styled-components";
import { PrimaryButton } from "../../styled/PrimaryButton";
import Bell from "../../assets/icons/bellIcon.svg";
import Connect from "../../assets/icons/connectIcon.svg";
import Share from "../../assets/icons/shareIcon.svg";
import Dots from "../../assets/icons/dotsIcon.svg";
import { devices } from "../../constants/mediaConstants";
import { checkMobileBrowser } from "../../helpers";

const Block = styled.div`
  display: flex;
  filter: drop-shadow(0px 8px 24px rgba(0, 0, 0, 0.08));
  position: relative;
  z-index: 100;
  @media ${devices.tablet} {
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 24px;
    box-sizing: border-box;
  }
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
  @media ${devices.tablet} {
    margin: 0;
  }
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

type StatusLabelProps = {
  theme: DefaultTheme;
  status: string;
};

const StatusLabel = styled(PrimaryButton)`
  color: ${({ theme, status }: StatusLabelProps) =>
    status === "Complete" ? theme.colors.black : theme.colors.primaryColor};
  background: ${({ theme }) => theme.colors.white};
  height: 32px;
  padding: 4px 12px;
`;

type ButtonBlockProps = {
  showNotification: (value: boolean) => void;
  showMenu: boolean;
  status?: string;
  setShowMenu: (value: boolean) => void;
};
const ButtonBlock = (props: ButtonBlockProps) => {
  const isMobile = checkMobileBrowser();
  const { showNotification, showMenu, setShowMenu, status } = props;
  return (
    <Block>
      <Button onClick={() => showNotification(true)}>
        <ButtonIcon image={Connect} />
      </Button>

      {!isMobile && (
        <Button>
          <ButtonIcon image={Share} />
        </Button>
      )}
      {status && <StatusLabel status={status}>{status}</StatusLabel>}
      {!isMobile && (
        <Button onClick={() => showNotification(true)}>
          <ButtonIcon image={Bell} />
          <ButtonText>Subscribe</ButtonText>
        </Button>
      )}
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
