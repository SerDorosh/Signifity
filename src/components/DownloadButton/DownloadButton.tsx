import styled from "styled-components";
import { PrimaryButton } from "../../styled/PrimaryButton";
import Document from "../../assets/icons/document.svg";
import Download from "../../assets/icons/downloadIcon.svg";

const Button = styled(PrimaryButton)`
  margin-bottom: 24px;
  padding: 12px 24px 12px 16px;
  background: ${({ theme }) => theme.colors.opacityBlack};
  color: ${({ theme }) => theme.colors.primaryColor};
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
`;

type IconProps = {
  image: string;
  size: string;
};

const Icon = styled.div`
  width: ${(props: IconProps) => props.size}px;
  height: ${(props: IconProps) => props.size}px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  background-image: url(${(props: IconProps) => props.image});
`;

const Text = styled.div`
  margin-left: 12px;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
`;

const DownloadButton = () => {
  return (
    <Button>
      <IconBlock>
        <Icon image={Document} size={"36"} />
      </IconBlock>
      <Icon image={Download} size={"24"} />
      <Text>Download document file</Text>
    </Button>
  );
};

export default DownloadButton;
