import styled from "styled-components";
import { PrimaryButton } from "../../styled/PrimaryButton";
import Bell from "../../assets/icons/bellIcon.svg";
import Share from "../../assets/icons/shareIcon.svg";
import { devices } from "../../constants/mediaConstants";
import { checkMobileBrowser } from "../../helpers";
import Article from "../../assets/icons/articleIcon.svg";

const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 96px;
  padding: 25px;
  margin: 72px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  box-sizing: border-box;
  @media ${devices.tablet} {
    grid-area: JoinPanel;

    margin: 0 0 -100px;
    border-radius: 0;
    width: 100%;
    justify-content: center;
  }
`;

const Button = styled(PrimaryButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primaryColor};
  box-sizing: border-box;
  user-select: none;
  @media ${devices.tablet} {
    background: rgba(0, 0, 0, 0.04);
    border-radius: 12px;
  }
`;

const BellsButton = styled(PrimaryButton)<{ small?: boolean }>`
  user-select: none;
  display: flex;
  gap: 14px;
  @media ${devices.tablet} {
    padding: ${({ small }) => (small ? "4px 16px" : "4px 36px")};
  }
`;

const JoinButton = styled(PrimaryButton)`
  user-select: none;
  @media ${devices.tablet} {
    padding: 4px 16px;
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
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

type JoinPanelProps = {
  showJoin?: boolean;
  isSubscribe?: boolean;
  showArticle?: boolean;
};

export const JoinPanel = (props: JoinPanelProps) => {
  const isMobile = checkMobileBrowser();
  const { showJoin, isSubscribe, showArticle } = props;
  return (
    <Wrapper>
      <Button>
        <ButtonIcon image={Share} />
      </Button>
      <BellsButton secondary small={isMobile && showJoin}>
        <ButtonIcon image={Bell} />
        {isMobile && showJoin ? null : (
          <ButtonText>
            {isSubscribe ? "Don't miss Presale" : "Subscribe"}
          </ButtonText>
        )}
      </BellsButton>
      {showJoin && (
        <JoinButton>
          <ButtonText>Join to the wait list</ButtonText>
        </JoinButton>
      )}
      {showArticle && (
        <Button secondary>
          <ButtonText>Go to article</ButtonText>
          <ButtonIcon image={Article} />
        </Button>
      )}
    </Wrapper>
  );
};
