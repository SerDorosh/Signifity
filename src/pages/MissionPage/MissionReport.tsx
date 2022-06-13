import styled from "styled-components";
import Slider from "../../components/Slider/Slider";
import { Flex } from "../../styled/Flex";
import { PrimaryButton } from "../../styled/PrimaryButton";
import Article from "../../assets/icons/articleIcon.svg";

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
`;

const MissionReport = () => {
  return (
    <Wrapper>
      <Title>Mission Report</Title>
      <Slider howToShow={3}>
        <MediaContentBlock>1</MediaContentBlock>
        <MediaContentBlock>2</MediaContentBlock>
        <MediaContentBlock>3</MediaContentBlock>
        <MediaContentBlock>4</MediaContentBlock>
        <MediaContentBlock>5</MediaContentBlock>
        <MediaContentBlock>6</MediaContentBlock>
      </Slider>
      <Flex gap="24px" alignItems="center;">
        <PrimaryButton secondary>
          <ButtonText>Go to article</ButtonText>
          <ButtonIcon image={Article} />
        </PrimaryButton>
        <Text>Read more about this mission in our blog</Text>
      </Flex>
    </Wrapper>
  );
};

export default MissionReport;
