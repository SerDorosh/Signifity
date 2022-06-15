import { useState } from "react";
import styled from "styled-components";
import { devices } from "../../constants/mediaConstants";
import { Flex } from "../../styled/Flex";
import DownloadButton from "../DownloadButton/DownloadButton";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 72px;
  color: ${({ theme }) => theme.colors.black};

  @media ${devices.tablet} {
    font-size: 34px;
    line-height: 36px;
  }
`;

const Description = styled.div`
  margin: 24px 0;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.lightBlack};
  @media ${devices.tablet} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const ShortDescription = styled.div`
  margin: 24px 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;

  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.lightBlack};
  @media ${devices.tablet} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const MoreOrLessButton = styled.div`
  height: 30px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.primaryColor};
  cursor: pointer;
  :hover {
    text-decoration: underline;
  }
  @media ${devices.tablet} {
    font-size: 16px;
    line-height: 24px;
  }
`;

type TextCardProps = {
  title?: string;
  description: string;
  file?: boolean;
};

const TextCard = (props: TextCardProps) => {
  const [showMore, setShowMore] = useState(false);
  const { title, description, file } = props;
  return (
    <Card>
      {title && <Title>{title}</Title>}
      {showMore ? (
        <ShortDescription>{description}</ShortDescription>
      ) : (
        <Description>{description}</Description>
      )}
      {file && <Flex>{!showMore && <DownloadButton />}</Flex>}

      <MoreOrLessButton onClick={() => setShowMore(!showMore)}>{`Show ${
        showMore ? "more" : "less"
      }`}</MoreOrLessButton>
    </Card>
  );
};

export default TextCard;
