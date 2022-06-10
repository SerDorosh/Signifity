import { useState } from "react";
import styled from "styled-components";
import { Flex } from "../../styled/Flex";
import DownloadButton from "../DownloadButton/DownloadButton";

const Card = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.div`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 72px;
  color: ${({ theme }) => theme.colors.black};
`;

const Description = styled.div`
  margin: 24px 0;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.colors.lightBlack};
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
`;

type TextCardProps = {
  title?: string;
  description: string;
  children?: React.ReactNode | React.ReactNode[];
  file?: boolean;
};

const TextCard = (props: TextCardProps) => {
  const [showMore, setShowMore] = useState(false);
  const { title, description, children, file } = props;
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
