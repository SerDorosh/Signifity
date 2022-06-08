import styled from "styled-components";
import DoubleImage from "../../components/DoubleImage/DoubleImage";
import { Flex } from "../../styled/Flex";

type UnderHeaderMenuProps = {
  projects: any[];
};

const UnderHeaderBlock = styled.div`
  margin: 40px 50px;
  display: flex;
  justify-content: start;
`;
const YourProjectsWindow = styled.div`
  justify-content: center;
  align-items: center;
  width: 239px;
  height: 80px;
  margin: 20px;
  background: ${({ theme }) => theme.colors.gray};
  border-radius: 12px;
  display: grid;
  justify-content: space-evenly;
  grid-auto-rows: 25px;
  align-content: center;
  grid-template-areas:
    "number title"
    "number subtitle";
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
`;
const ImageBlock = styled.div`
  grid-area: number;
`;

const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  grid-area: title;
`;
const SubTitle = styled.p`
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
  margin: 20px;
`;

export default function UnderHeaderMenu({ projects }: UnderHeaderMenuProps) {
  return (
    <UnderHeaderBlock>
      <YourProjectsWindow>
        <NumberOfProjects>{projects.length}</NumberOfProjects>
        <Title> Your Project(s)</Title>
        <SubTitle>
          Motivation message
        </SubTitle>
      </YourProjectsWindow>
      {projects.length !== 0 &&
        projects.map(
          ({ image, missionName, celebrityName, id }) =>
            id < 3 && (
              <CertainProjectWindow key={id}>
                <ImageBlock>
                  <DoubleImage
                    firstImage={image}
                    secondImage={image}
                    size="56px"
                    side="left"
                  />
                </ImageBlock>

                <Title>{missionName}</Title>
                <SubTitle>
                  {celebrityName}
                </SubTitle>
              </CertainProjectWindow>
            )
        )}
      <Flex alignItems="center">
        <Ellipse />
        {projects.length < 3 && (
          <>
            <Ellipse />
            <Ellipse />
            <Ellipse />
          </>
        )}
      </Flex>
    </UnderHeaderBlock>
  );
}
