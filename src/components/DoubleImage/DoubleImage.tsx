import styled from "styled-components";

type ImageProps = {
  image: string;
  size: string;
  side: string;
};

type ComponentProps = {
  firstImage: string;
  secondImage: string;
  size: string;
  side: string;
};
const ImageWrapper = styled.div`
  display: flex;
`;
const FirstProjectImage = styled.div`
  position: relative;
  left: ${({ side }: ImageProps) => (side === "right" ? "25px" : "0")};
  width: ${({ size }: ImageProps) => size};
  height: ${({ size }: ImageProps) => size};
  background-image: url(${(props: ImageProps) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: 4px solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;
`;
const SecondProjectImage = styled(FirstProjectImage)`
  position: relative;
  height: ${({ size }: ImageProps) => size};
  background-image: url(${(props: ImageProps) => props.image});
  left: ${({ side }: ImageProps) => (side === "right" ? "0" : "-25px")};
  
`;

export default function DoubleImage({
  firstImage,
  secondImage,
  size,
  side,
}: ComponentProps) {
  return (
    <ImageWrapper>
      <FirstProjectImage
        image={firstImage}
        size={size}
        side={side}
      ></FirstProjectImage>
      <SecondProjectImage
        image={secondImage}
        size={size}
        side={side}
      ></SecondProjectImage>
    </ImageWrapper>
  );
}
