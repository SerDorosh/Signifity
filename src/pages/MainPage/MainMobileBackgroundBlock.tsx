import styled from "styled-components";
import AvatarList from "../../components/AvatarList/AvatarList";
import { PrimaryButton } from "../../styled/PrimaryButton";
import MobileMissionAvatar from "../../assets/image/mobileMissionAvatar.svg";
import { Flex } from "../../styled/Flex";

const Wrapper = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 12px;
  height: 554px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin:32px 0 0 0;
`;
const TopButton = styled(PrimaryButton)`
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primaryColor};
  height: 32px;
  width: 264px;
`;
const JoinButton = styled(PrimaryButton)`
  height: 48px;
  width: 264px;
`;
const MissionAvatarImage = styled.div`
  width: 278px;
  height: 234px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props: { image: string }) => props.image});
`;
const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-weight: 700;
  font-size: 34px;
`;
const SubTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.lightBlack};
  grid-area: subtitle;
`;
type BackgroundBlockProps = {
  celebrityIcons: string[];
  name: string;
};

export default function MainMobileBackgroundBlock({
  celebrityIcons,
  name,
}: BackgroundBlockProps) {
  return (
    <Wrapper>
      <TopButton>Presale 00:00:00:00 left</TopButton>
      <Flex flexDirection="column" alignItems="center">
        <Flex flexDirection="column" alignItems="center">
          <MissionAvatarImage image={MobileMissionAvatar} />
          <Title>{name}</Title>
        </Flex>
        <AvatarList icons={celebrityIcons} howManyShowIcons={2} />
        <Flex
          flexDirection="column"
          alignItems="center"
          margin="20px 0 0 0"
          gap={20}
        >
          <JoinButton>Join to the wait list</JoinButton>
          <SubTitle>Created 10 day(s) ago</SubTitle>
        </Flex>
      </Flex>
    </Wrapper>
  );
}
