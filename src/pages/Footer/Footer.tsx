import styled from "styled-components";
import Layout from "../../styled/Layout";
import { Flex } from "../../styled/Flex";
import Instagram from "../../assets/icons/instagramIcon.svg";
import MIcon from "../../assets/icons/mIcon.svg";
import Telegram from "../../assets/icons/telegramIcon.svg";
import Twitter from "../../assets/icons/twitterIcon.svg";
import { devices } from "../../constants/mediaConstants";

const FooterWrapper = styled.div`
  padding: 0 72px;
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  @media ${devices.tablet} {
    padding: 0 24px;
  }
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
  @media ${devices.tablet} {
    flex-direction: column;
    gap: 24px;
  }
`;

const CommunityBlock = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  @media ${devices.tablet} {
    width: 100%;
  }
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
  color: ${({ theme }) => theme.colors.lightWhite};
`;

const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  @media ${devices.tablet} {
    align-items: flex-start;
  }
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
  @media ${devices.tablet} {
    width: 48px;
    height: 48px;
  }
`;

const ButtonIcon = styled.div`
  width: 28px;
  height: 28px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props: { image: string }) => props.image});
  @media ${devices.tablet} {
    width: 24px;
    height: 24px;
  }
`;

const CopyrightAndTermsBlock = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0;
  @media ${devices.tablet} {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
      "Terms"
      "Copyright";
    grid-gap: 24px;
  }
`;

const CopyrightNotices = styled.div`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.lightWhite};
  @media ${devices.tablet} {
    grid-area: Copyright;
  }
`;

const TermsLink = styled.div`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.lightWhite};
`;

const TermsBlock = styled.div`
  display: flex;
  gap: 16px;
  @media ${devices.tablet} {
    flex-direction: column;
  }
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
        <CopyrightAndTermsBlock>
          <CopyrightNotices>
            © Signifty, Inc. All rights reserved.
          </CopyrightNotices>
          <TermsBlock>
            <TermsLink>Terms of Service</TermsLink>
            <TermsLink>Privacy</TermsLink>
          </TermsBlock>
        </CopyrightAndTermsBlock>
      </Content>
    </FooterWrapper>
  );
};

export default Footer;
