import styled from "styled-components";
import { devices } from "../../constants/mediaConstants";
import { Flex } from "../../styled/Flex";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  @media ${devices.tablet} {
    width: 100vw;
  }
`;

type AvatarProps = {
  image: string;
};

const Avatar = styled.div`
  width: 300px;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props: AvatarProps) => props.image});
  border: 8px solid ${({ theme }) => theme.colors.primaryColor};
  border-radius: 50%;
  @media ${devices.tablet} {
    width: 200px;
    height: 200px;
  }
`;

const CelebrityName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 36px;
  color: ${({ theme }) => theme.colors.black};
`;

const SocialTitle = styled.div`
  margin-bottom: 8px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.black};
`;

const SocialBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 16px 0 0 0;
  @media ${devices.tablet} {
    flex-direction: row;
    gap: 8px;
    flex-wrap: wrap;
  }
`;

type CelebrityCardProps = {
  avatar: string;
  name: string;
  social: string[];
};

const CelebrityCard = (props: CelebrityCardProps) => {
  const { avatar, name, social } = props;
  return (
    <Card>
      <Avatar image={avatar} />
      <CelebrityName>{name}</CelebrityName>
      <SocialBlock>
        {social.map((el, i) => (
          <SocialTitle key={i}>{el}</SocialTitle>
        ))}
      </SocialBlock>
    </Card>
  );
};

export default CelebrityCard;
