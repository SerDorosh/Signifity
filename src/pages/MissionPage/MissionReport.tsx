import styled from "styled-components";
import Slider from "../../components/Slider/Slider";
import { PrimaryButton } from "../../styled/PrimaryButton";
import Article from "../../assets/icons/articleIcon.svg";
import { devices } from "../../constants/mediaConstants";
import { checkMobileBrowser } from "../../helpers";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 36px;
  margin: 62px 0 0 0;
`;

const MediaContentBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 256px;
  height: 144px;
  background: rgba(0, 0, 0, 0.04);
  border-radius: 12px;
`;

const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 72px;
  color: ${({ theme }) => theme.colors.black};
  @media ${devices.tablet} {
    font-size: 34px;
    line-height: 36px;
  }
`;

const ButtonIcon = styled.div`
  width: 18px;
  height: 18px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${(props: { image: string }) => props.image});
`;

const ButtonText = styled.div`
  margin-right: 13px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

const Text = styled.div`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  @media ${devices.tablet} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const ArticleBlock = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  @media ${devices.mobile} {
    flex-direction: column;
    width: 100%;
  }
`;

const Button = styled(PrimaryButton)`
  box-sizing: border-box;
  @media ${devices.mobile} {
    width: 100%;
  }
`;

const MissionReport = () => {
  const isMobile = checkMobileBrowser();
  return (
    <Wrapper>
      <Title>Mission Report</Title>
      <Slider howToShow={3} withoutButton={isMobile}>
        <MediaContentBlock>1</MediaContentBlock>
        <MediaContentBlock>2</MediaContentBlock>
        <MediaContentBlock>3</MediaContentBlock>
        <MediaContentBlock>4</MediaContentBlock>
        <MediaContentBlock>5</MediaContentBlock>
        <MediaContentBlock>6</MediaContentBlock>
      </Slider>
      <ArticleBlock>
        <Button secondary>
          <ButtonText>Go to article</ButtonText>
          <ButtonIcon image={Article} />
        </Button>
        <Text>Read more about this mission in our blog</Text>
      </ArticleBlock>
    </Wrapper>
  );
};

export default MissionReport;
