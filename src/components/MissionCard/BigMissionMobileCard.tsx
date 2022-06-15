import styled, { DefaultTheme } from "styled-components";
import ScreenSize from "../../helpers/ScreenSize";
import { Flex } from "../../styled/Flex";
import DoubleImage from "../DoubleImage/DoubleImage";
import { devices } from "../../constants/mediaConstants";

const CardWrapper = styled.div`
  width: 100%;
  height: 550px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.white};
`;
const InsideWrapper = styled.div`
  background: ${({ theme }) => theme.colors.gray};
  height: 454px;
`;
const TopText = styled.p`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  text-align: right;
  letter-spacing: 0.1px;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.black};
`;
const BottomTitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.black};
  margin: 0;
`;
const BottomSubtitle = styled.span`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.lightBlack};
  margin: 10px 0 15px;
  @media ${devices.tablet} {
    margin: 5px 0 15px;
  }
`;

type MissionsProps = {
  missionName: string;
  celebrityName: string;
  buttonStatus: string;
  goal: number;
  currentProgress: number;
  image: string[];
  size: string;
  theme?: DefaultTheme;
  status?: string;
};

export default function BigMissionMobileCard({
  missionName,
  celebrityName,
  buttonStatus,
  goal,
  currentProgress,
  image,
  size,
  status,
}: MissionsProps) {
  const { isMobile, isTablet } = ScreenSize();

  return (
    <CardWrapper>
      <InsideWrapper>
        <Flex justifyContent="space-between" margin="20px">
          <DoubleImage
            size={isMobile || isTablet ? "56px" : "80px"}
            side="left"
            firstImage={image[0]}
            secondImage={image[1]}
          ></DoubleImage>
          {goal !== currentProgress && <TopText>12 h ago</TopText>}
        </Flex>
        <Flex flexDirection="column" margin="20px">
          <BottomTitle>{missionName}</BottomTitle>
          <BottomSubtitle>By {celebrityName}</BottomSubtitle>
        </Flex>
      </InsideWrapper>
    </CardWrapper>
  );
}
