import styled from "styled-components";
import { Flex } from "../../styled/Flex";

type ImageProps = {
  image: string;
};
type OurCelebritiesProps = {
  ourCelebrities: any[];
};

const OurCelebrityBlock = styled.div`
  margin: 100px 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
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
  font-weight: 400;
  font-size: 24px;
  margin: 10px 0;
  color: ${({ theme }) => theme.colors.lightBlack};
`;
const OurCelebrityAvatarsBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const UnderAvatarText = styled(Title)`
  font-size: 24px;
`;
const AvatarImage = styled.div`
  position: relative;
  width: 184px;
  height: 184px;
  background-image: url(${(props: ImageProps) => props.image});
  border: 4px solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;
`;

export default function OurCelebrities({
  ourCelebrities,
}: OurCelebritiesProps) {
  return (
    <OurCelebrityBlock>
      <div>
        <Title>The celebrity that are alseady with us</Title>
        <SubTitle>Additional text</SubTitle>
      </div>
      <Flex justifyContent="space-around" alignItems="center">
        {ourCelebrities.map(({ name, image, id }) => (
          <OurCelebrityAvatarsBlock key={id}>
            <AvatarImage image={image} />
            <UnderAvatarText>{name}</UnderAvatarText>
          </OurCelebrityAvatarsBlock>
        ))}
      </Flex>
    </OurCelebrityBlock>
  );
}
