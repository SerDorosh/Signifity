import styled from "styled-components";
import { PrimaryButton } from "../../styled/PrimaryButton";
import Document from "../../assets/icons/document.svg";
import Download from "../../assets/icons/downloadIcon.svg";
import { devices } from "../../constants/mediaConstants";

const Button = styled(PrimaryButton)`
  margin-bottom: 24px;
  padding: 12px 24px 12px 16px;
  background: ${({ theme }) => theme.colors.opacityBlack};
  color: ${({ theme }) => theme.colors.primaryColor};
  @media ${devices.tablet} {
    width: 100%;
  }
`;

const IconBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  padding: 16px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.white};
  box-sizing: border-box;
  @media ${devices.tablet} {
    padding: 12px;
  }
`;

type IconProps = {
  image: string;
  size: string;
  mobileSize: string;
};

const Icon = styled.div`
  width: ${(props: IconProps) => props.size}px;
  height: ${(props: IconProps) => props.size}px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${(props: IconProps) => props.image});
  @media ${devices.tablet} {
    width: ${(props: IconProps) => props.mobileSize}px;
    height: ${(props: IconProps) => props.mobileSize}px;
  }
`;

const Text = styled.div`
  margin-left: 12px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  @media ${devices.tablet} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const DownloadButton = () => {
  return (
    <Button>
      <IconBlock>
        <Icon image={Document} size={"36"} mobileSize="20" />
      </IconBlock>
      <Icon image={Download} size={"24"} mobileSize="16" />
      <Text>Download document file</Text>
    </Button>
  );
};

export default DownloadButton;
