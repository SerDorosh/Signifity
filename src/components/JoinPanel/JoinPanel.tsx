import styled from "styled-components";
import { PrimaryButton } from "../../styled/PrimaryButton";
import Bell from "../../assets/icons/bellIcon.svg";
import Share from "../../assets/icons/shareIcon.svg";

const Wrapper = styled.div`
  width: fit-content;
  display: flex;
  gap: 16px;
  align-items: center;
  margin-top: 96px;
  padding: 25px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  box-sizing: border-box;
`;

const Button = styled(PrimaryButton)`
  display: flex;
  justify-content: center;
  align-items: center;
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
`;

type JoinPanelProps = {
  showJoin?: boolean;
};

export const JoinPanel = (props: JoinPanelProps) => {
  const { showJoin } = props;
  return (
    <Wrapper>
      <Button>
        <ButtonIcon image={Share} />
      </Button>
      <PrimaryButton secondary>
        <ButtonIcon image={Bell} />
        <ButtonText>Don't miss Presale</ButtonText>
      </PrimaryButton>
      {showJoin && (
        <PrimaryButton>
          <ButtonText>Join to the wait list</ButtonText>
        </PrimaryButton>
      )}
    </Wrapper>
  );
};
