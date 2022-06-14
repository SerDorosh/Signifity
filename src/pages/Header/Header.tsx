import styled, { DefaultTheme } from "styled-components";
import { NavLink } from "react-router-dom";
import { devices } from "../../constants/mediaConstants";
import Menu from "../../assets/icons/menuIcon.svg";
import { useState } from "react";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 32px;
  height: 72px;
  background: #ffffff;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.12);
  z-index: 205;
  @media ${devices.tablet} {
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid: none;
    grid-template-areas: "avatar logo logo logo menu";
    justify-items: center;
  },
`;

const Logo = styled.div`
  width: 55px;
  height: 24px;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  @media ${devices.tablet} {
    grid-area: logo;
  }
`;

const MenuIcon = styled.div`
  display: none;
  width: 18px;
  height: 12px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${(props: { image: string }) => props.image});
  cursor: pointer;
  @media ${devices.tablet} {
    display: flex;
    grid-area: menu;
  }
`;

const MenuWrapper = styled.div`
  height: 100%;
  display: flex;
  @media ${devices.tablet} {
    display: none;
  }
`;

type SideMenuProps = {
  isOpen: boolean;
  theme: DefaultTheme;
};

const SideMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  margin-right: ${({ isOpen }: SideMenuProps) => (isOpen ? "0" : "-500px")};
  width: 50vw;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: ${({ theme }: SideMenuProps) => theme.colors.white};
  z-index: 200;
  transition: 0.5s;
  @media ${devices.tablet} {
    display: flex;
  }
`;

const MenuItems = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 28px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.lightBlack};
  border-bottom: 2px solid ${({ theme }) => theme.colors.none};
  box-sizing: border-box;
  text-decoration: none;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.primaryColor};
  }
  &.active {
    color: ${({ theme }) => theme.colors.primaryColor};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primaryColor};
  }
`;

const AccountBlock = styled.div`
  display: flex;
  align-items: center;
  @media ${devices.tablet} {
    grid-area: avatar;
  }
`;

const Balance = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  padding: 8px 12px;
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: 12px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  @media ${devices.tablet} {
    display: none;
  }
`;

type AvatarType = {
  img?: string;
  theme: DefaultTheme;
};

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 12px;
  cursor: pointer;
  background: ${(props: AvatarType) =>
    props.img ? `url(${props.img})` : props.theme.colors.primaryColor};
`;

const Header = () => {
  const [openSide, setOpenSide] = useState(false);

  return (
    <HeaderWrapper>
      <Logo>Logo</Logo>
      <MenuWrapper>
        <MenuItems to={"/"}>Main</MenuItems>
        <MenuItems to={"/missions"}>Missions</MenuItems>
        <MenuItems to={"/nft"}>NFT</MenuItems>
        <MenuItems to={"/about"}>About</MenuItems>
      </MenuWrapper>
      <AccountBlock>
        <Balance>9.9999 ETH</Balance>
        <Avatar />
      </AccountBlock>
      <MenuIcon
        image={Menu}
        onClick={(e) => {
          setOpenSide(!openSide);
        }}
      />
      <SideMenu isOpen={openSide} onClick={() => setOpenSide(false)}>
        <MenuItems to={"/"}>Main</MenuItems>
        <MenuItems to={"/missions"}>Missions</MenuItems>
        <MenuItems to={"/nft"}>NFT</MenuItems>
        <MenuItems to={"/about"}>About</MenuItems>
      </SideMenu>
    </HeaderWrapper>
  );
};

export default Header;
