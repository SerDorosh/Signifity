import styled, { DefaultTheme } from "styled-components";
import AvatarList from "../../components/AvatarList/AvatarList";
import CelebrityCard from "../../components/CelebrityCard/CelebrityCard";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import Timer from "../../components/Timer/Timer";
import { Flex } from "../../styled/Flex";
import Layout from "../../styled/Layout";
import { PrimaryButton } from "../../styled/PrimaryButton";

const BackgroundBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  ${(props: { image?: string; theme: DefaultTheme }) =>
    props.image
      ? `background-image: url(${props.image})`
      : `background: ${props.theme.colors.gray}`};
`;

const Content = styled(Layout)`
  max-width: 1440px;
`;

const MissionTitle = styled.div`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 72px;
  color: ${({ theme }) => theme.colors.black};
`;

const CelebrityName = styled.div`
  margin-left: 16px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
`;

const JoinButton = styled(PrimaryButton)`
  margin-right: 24px;
`;

const GoalBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  margin-left: 24px;
  padding: 8px 16px;
  color: ${({ theme }) => theme.colors.primaryColor};
  background: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  box-sizing: border-box;
`;

const PageParts = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;

const MissionPage = () => {
  const MockData = {
    dateStart: 1654625080000,
    celebrityIcons: [
      "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLsa2zm7abJ_1YcMA1aSuuc7KM6Og3kBeDg&usqp=CAU",
      "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLsa2zm7abJ_1YcMA1aSuuc7KM6Og3kBeDg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLsa2zm7abJ_1YcMA1aSuuc7KM6Og3kBeDg&usqp=CAU",
      "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLsa2zm7abJ_1YcMA1aSuuc7KM6Og3kBeDg&usqp=CAU",
    ],
    status: "inProgres",
    goal: 10000,
    currentValue: 200,
    currency: "ETH",
    celebrity: {
      name: "Celebrity Name",
      avatar:
        "https://assets.website-files.com/5ee2a460548fc323155ffd49/5ee3bbd75819c47c0ce5c700_Sid%20Sijbrandij.jpg",
      social: ["@instagram", "@tiktok", "@youtube", "@facebook"],
    },
  };

  const {
    dateStart,
    celebrityIcons,
    status,
    goal,
    currentValue,
    currency,
    celebrity,
  } = MockData;

  return (
    <>
      <BackgroundBlock>
        <Content>
          <MissionTitle>Mission Title</MissionTitle>
          <Flex alignItems="center" margin="16px 0 56px">
            <AvatarList icons={celebrityIcons} howManyShowIcons={2} />
            <CelebrityName>By Celebrity Name & Fund Name...</CelebrityName>
          </Flex>
          {status === "pending" ? (
            <Flex alignItems="center">
              <JoinButton>Join to the wait list</JoinButton>
              <Timer date={dateStart} text="left" />
            </Flex>
          ) : (
            <Flex alignItems="center">
              <ProgressBar goal={goal} currentValue={currentValue} />
              <GoalBlock>{`${goal} ${currency}`}</GoalBlock>
            </Flex>
          )}
        </Content>
      </BackgroundBlock>
      <Content>
        <PageParts>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum
            porro corrupti illum quo blanditiis voluptatem ea inventore
            consequatur nam reprehenderit quia nostrum quae, impedit, facere
            explicabo quaerat aperiam animi natus?
          </div>
          <CelebrityCard
            avatar={celebrity.avatar}
            name={celebrity.name}
            social={celebrity.social}
          />
        </PageParts>
      </Content>
    </>
  );
};

export default MissionPage;
