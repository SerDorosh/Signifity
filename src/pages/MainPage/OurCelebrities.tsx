import styled from "styled-components";
import { Flex } from "../../styled/Flex";
import { devices } from "../../constants/mediaConstants";

type ImageProps = {
  image: string;
  size: string;
};
type OurCelebritiesProps = {
  ourCelebrities: any[];
};
type BlockProps = {
  moreThanSix: boolean;
};
const OurCelebrityBlock = styled.div`
  margin: 130px 0;
  display: ${({ moreThanSix }: BlockProps) => (!moreThanSix ? "grid" : "flex")};
  flex-direction: column;
  grid-template-columns: 1fr 1fr;
  align-items: ${({ moreThanSix }: BlockProps) =>
    !moreThanSix ? "center" : "start"};
  @media ${devices.tablet} {
    display: flex;
    flex-direction: column;
    align-items: start;
    overflow: scroll;
  }
`;
const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  margin: 0;
  color: ${({ theme }) => theme.colors.black};
  @media ${devices.tablet} {
    font-size: 34px;
  }
`;
const SubTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.lightBlack};
  @media ${devices.tablet} {
    font-size: 16px;
  }
`;

const UnderAvatarText = styled(Title)`
  font-size: ${({ moreThanSix }: BlockProps) =>
    !moreThanSix ? "24px" : "16px"};
  white-space: nowrap;
  @media ${devices.tablet} {
    font-size: 16px;
  }
`;
const AvatarsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  @media ${devices.tablet} {
    flex-wrap: nowrap;
    gap: 15px;
  }
`;
const AvatarImage = styled.div`
  position: relative;
  width: ${({ size }: ImageProps) => size};
  height: ${({ size }: ImageProps) => size};
  background-image: url(${(props: ImageProps) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 4px solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  @media ${devices.laptop} {
    width: 96px;
    height: 96px;
  }
  @media ${devices.tablet} {
    width: 72px;
    height: 72px;
  }
`;

export default function OurCelebrities({
  ourCelebrities,
}: OurCelebritiesProps) {
  const threeOrLess = ourCelebrities.length <= 3;
  const sixOrLess = ourCelebrities.length > 3 && ourCelebrities.length <= 6;
  const moreThanSix = ourCelebrities.length > 6;
  const size = threeOrLess ? "184px" : sixOrLess ? "120px" : "96px";

  return (
    <OurCelebrityBlock moreThanSix={moreThanSix}>
      <Flex flexDirection="column" margin="0 0 20px 0">
        <Title>The celebrity that are alseady with us</Title>
        <SubTitle>Additional text</SubTitle>
      </Flex>
      <AvatarsWrapper>
        {ourCelebrities.map(({ name, image, id }) => (
          <Flex flexDirection="column" alignItems="center" key={id}>
            <AvatarImage size={size} image={image[0]} />
            <UnderAvatarText moreThanSix={moreThanSix}>{name}</UnderAvatarText>
          </Flex>
        ))}
      </AvatarsWrapper>
    </OurCelebrityBlock>
  );
}
