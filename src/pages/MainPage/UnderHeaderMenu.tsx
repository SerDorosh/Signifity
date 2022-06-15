import styled from "styled-components";
import DoubleImage from "../../components/DoubleImage/DoubleImage";
import { Flex } from "../../styled/Flex";
import { devices } from "../../constants/mediaConstants";

type UnderHeaderMenuProps = {
  projects: any[];
};

const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  padding:10px;
  @media ${devices.desktop} {
    overflow-x: scroll;
    overflow-wrap: wrap;
  }
`;

const YourProjectsWindow = styled.div`
  justify-content: center;
  align-items: center;
  min-width: 239px;
  height: 80px;
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 12px;
  display: grid;
  justify-content: space-evenly;
  grid-auto-rows: 25px;
  align-content: center;
  grid-template-areas:
    "number title"
    "number subtitle";
  @media ${devices.tablet} {
    min-width: 193px;
    height: 60px;
  }
`;

const CertainProjectWindow = styled(YourProjectsWindow)`
  background: ${({ theme }) => theme.colors.white};
`;

const NumberOfProjects = styled.p`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  color: ${({ theme }) => theme.colors.primaryColor};
  grid-area: number;
  @media ${devices.tablet} {
    font-size: 24px;
  }
`;
const ImageBlock = styled.div`
  grid-area: number;
`;

const Title = styled.span`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  grid-area: title;
`;
const SubTitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.lightBlack};
  grid-area: subtitle;
`;
const Ellipse = styled.div`
  width: 56px;
  height: 56px;
  border: 1px dashed rgba(0, 0, 0, 0.38);
  border-radius: 100%;
`;

export default function UnderHeaderMenu({ projects }: UnderHeaderMenuProps) {
  return (
    <Wrapper>
      <YourProjectsWindow>
        <NumberOfProjects>{projects.length}</NumberOfProjects>
        <Title> Your Project(s)</Title>
        <SubTitle>Motivation message</SubTitle>
      </YourProjectsWindow>
      <Flex alignItems="center" margin="0 0 0 20px" gap="20px">
        {projects.length !== 0 &&
          projects.map(
            ({ image, missionName, celebrityName, id }) =>
              id < 4 && (
                <CertainProjectWindow key={id}>
                  <ImageBlock>
                    <DoubleImage
                      firstImage={image[0]}
                      secondImage={image[1]}
                      size="56px"
                      side="right"
                    />
                  </ImageBlock>

                  <Title>{missionName}</Title>
                  <SubTitle>{celebrityName}</SubTitle>
                </CertainProjectWindow>
              )
          )}
        {projects.length < 4 && <Ellipse />}
        {projects.length < 3 && <Ellipse />}
        {projects.length < 2 && <Ellipse />}
        {projects.length < 1 && <Ellipse />}
      </Flex>
    </Wrapper>
  );
}
