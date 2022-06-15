import styled from "styled-components";

type ButtonStyledProps = {
  disabled?: boolean;
  size?: string;
  secondary?: boolean;
};

// const getHoverEffect = (
//   disabled: boolean | undefined,
//   secondary: boolean | undefined
// ) => {
//   if (disabled || secondary) {
//     return 0.7;
//   }
//   return 0.9;
// };

export const PrimaryButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  padding: 4px 36px;
  border-radius: 12px;
  cursor: pointer;
  user-select: none;
  white-space: nowrap;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  border: none;
  color: ${({ theme, secondary }) =>
    secondary
      ? theme.appTheme.secondaryButtonTextColor
      : theme.appTheme.primaryButtonTextColor};
  background: ${({ theme, secondary }) =>
    secondary
      ? theme.appTheme.secondaryButtonBackground
      : theme.appTheme.primaryButtonBackground};
  user-select: none;
  box-sizing: border-box;

  :hover {
    ${(props: ButtonStyledProps) => (props.disabled ? "" : `opacity: 0.9`)};
  }
`;
