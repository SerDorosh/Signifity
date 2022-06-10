import styled from "styled-components";
import { Flex } from "../../styled/Flex";

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
  margin: 100px 50px;
  display: ${({ moreThanSix }: BlockProps) => (!moreThanSix ? "grid" : "flex")};
  flex-direction: column;
  grid-template-columns: 1fr 1fr;
  align-items: ${({ moreThanSix }: BlockProps) =>
    !moreThanSix ? "center" : "start"};
`;
const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  margin: 0;
  color: ${({ theme }) => theme.colors.black};
`;
const SubTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.lightBlack};
`;

const UnderAvatarText = styled(Title)`
  font-size: ${({ moreThanSix }: BlockProps) =>
    !moreThanSix ? "24px" : "16px"};
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
      <Flex
        justifyContent="space-around"
        flexWrap={"wrap"}
        alignItems="center"
        gap={20}
      >
        {ourCelebrities.map(({ name, image, id }) => (
          <Flex flexDirection="column" alignItems="center" gap="10px" key={id}>
            <AvatarImage size={size} image={image[0]} />
            <UnderAvatarText moreThanSix={moreThanSix}>{name}</UnderAvatarText>
          </Flex>
        ))}
      </Flex>
    </OurCelebrityBlock>
  );
}
