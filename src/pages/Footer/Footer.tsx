import styled from "styled-components";
import Layout from "../../styled/Layout";
import { Flex } from "../../styled/Flex";
import Instagram from "../../assets/icons/instagramIcon.svg";
import MIcon from "../../assets/icons/mIcon.svg";
import Telegram from "../../assets/icons/telegramIcon.svg";
import Twitter from "../../assets/icons/twitterIcon.svg";

const FooterWrapper = styled.div`
  padding: 0 72px;
  height: 394px;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Block = styled(Layout)`
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  width: 100%;
  margin: 72px auto 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.opacityWhite};
`;

const CommunityBlock = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

const CommunityTitle = styled.div`
  margin-bottom: 12px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
`;

const CommunityDescription = styled.div`
  margin-bottom: 24px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;

const MenuItem = styled.div`
  margin-bottom: 23px;
  color: ${({ theme }) => theme.colors.lightWhite};
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const CommunityButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
  width: 56px;
  height: 56px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.opacityWhite};
`;

const ButtonIcon = styled.div`
  width: 28px;
  height: 28px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props: { image: string }) => props.image});
`;

const CopyrightNotices = styled.div`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.lightWhite};
`;

const TermsLink = styled.div`
  margin-left: 16px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.lightWhite};
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Content>
        <Block>
          <CommunityBlock>
            <CommunityTitle>Join Signifty community</CommunityTitle>
            <CommunityDescription>
              Stay up to date on new releases, interviews, events, and updates
              from Signifty community.
            </CommunityDescription>
            <Flex>
              <CommunityButton>
                <ButtonIcon image={Instagram} />
              </CommunityButton>
              <CommunityButton>
                <ButtonIcon image={Telegram} />
              </CommunityButton>
              <CommunityButton>
                <ButtonIcon image={MIcon} />
              </CommunityButton>
              <CommunityButton>
                <ButtonIcon image={Twitter} />
              </CommunityButton>
            </Flex>
          </CommunityBlock>
          <FooterMenu>
            <MenuItem>Signifty</MenuItem>
            <MenuItem>Missions</MenuItem>
            <MenuItem>Gallery</MenuItem>
            <MenuItem>About</MenuItem>
          </FooterMenu>
        </Block>
        <Flex justifyContent="space-between" margin="24px 0">
          <CopyrightNotices>
            © Signifty, Inc. All rights reserved.
          </CopyrightNotices>
          <Flex>
            <TermsLink>Terms of Service</TermsLink>
            <TermsLink>Privacy</TermsLink>
          </Flex>
        </Flex>
      </Content>
    </FooterWrapper>
  );
};

export default Footer;
