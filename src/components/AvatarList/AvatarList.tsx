import styled, { DefaultTheme } from "styled-components";

const AvatarListWrapper = styled.div`
  position: relative;
  width: ${(props: { howManyShowIcons: number; difference: boolean }) =>
    props.difference
      ? `${props.howManyShowIcons * 48 + 80}px`
      : `${(props.howManyShowIcons - 1) * 48 + 80}px`};
  height: 80px;
`;

type AvatarProps = {
  image: string;
  index: number;
  theme: DefaultTheme;
};

const Avatar = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  left: ${(props: AvatarProps) => props.index * 48}px;
  top: 0px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url(${(props: AvatarProps) => props.image});
  border: 5px solid ${(props: AvatarProps) => props.theme.colors.white};
  border-radius: 50%;
`;

type PlusNumberIconProps = {
  index: number;
  theme: DefaultTheme;
};

const PlusNumberIcon = styled.div`
  position: absolute;
  left: ${(props: PlusNumberIconProps) => props.index * 48}px;
  top: 0px;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props: PlusNumberIconProps) => props.theme.colors.white};
  background: ${(props: PlusNumberIconProps) => props.theme.colors.darkGray};
  border: 5px solid ${(props: PlusNumberIconProps) => props.theme.colors.white};
  border-radius: 50%;
  font-family: ${(props: PlusNumberIconProps) => props.theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 24px;
`;

type AvatarListProps = {
  icons: string[];
  howManyShowIcons: number;
};

const AvatarList = (props: AvatarListProps) => {
  const { icons, howManyShowIcons } = props;
  const difference = icons.length - howManyShowIcons;
  return (
    <AvatarListWrapper
      howManyShowIcons={howManyShowIcons}
      difference={difference > 0}
    >
      {icons.map(
        (el, i) =>
          i < howManyShowIcons && <Avatar image={el} index={i} key={i} />
      )}
      {difference > 0 && (
        <PlusNumberIcon
          index={howManyShowIcons}
        >{`+${difference}`}</PlusNumberIcon>
      )}
    </AvatarListWrapper>
  );
};

export default AvatarList;
