import styled, { DefaultTheme } from "styled-components";

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 32px;
  height: 72px;
  background: #ffffff;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.12);
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
`;

const MenuWrapper = styled.div`
  height: 100%;
  display: flex;
`;

const MenuItems = styled.div`
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
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.primaryColor};
    border-bottom: 2px solid ${({ theme }) => theme.colors.primaryColor};
  }
`;

const AccountBlock = styled.div`
  display: flex;
  align-items: center;
`;

const Balance = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 12px;
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: 12px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

type AvatarType = {
  img?: string;
  theme: DefaultTheme;
};

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 16px;
  border-radius: 12px;
  cursor: pointer;
  background: ${(props: AvatarType) =>
    props.img ? `url(${props.img})` : props.theme.colors.primaryColor};
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>Logo</Logo>
      <MenuWrapper>
        <MenuItems>Main</MenuItems>
        <MenuItems>Missions</MenuItems>
        <MenuItems>NFT</MenuItems>
        <MenuItems>About</MenuItems>
      </MenuWrapper>
      <AccountBlock>
        <Balance>9.9999 ETH</Balance>
        <Avatar />
      </AccountBlock>
    </HeaderWrapper>
  );
};

export default Header;
