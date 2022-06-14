import { useEffect, useState } from "react";
import styled from "styled-components";
import { PrimaryButton } from "../../styled/PrimaryButton";

type TimerWrapperProps = {
  secondary?: boolean;
};

const TimerWrapper = styled(PrimaryButton)<TimerWrapperProps>`
  color: ${({ theme }) => theme.appTheme.secondaryButtonTextColor};
  background: ${({ theme, secondary }) =>
    secondary ? theme.colors.secondaryButtonBackground : theme.colors.white};
`;

const getTimerDate = (date: number) => {
  const totalSeconds = date / 1000;
  const days = Math.trunc(totalSeconds / 3600 / 24);
  const hours = Math.trunc(totalSeconds / 3600) % 24;
  const minutes = Math.trunc(totalSeconds / 60) % 60;
  const seconds = Math.trunc(totalSeconds) % 60;
  return `${days > 9 ? days : `0${days}`}:${hours > 9 ? hours : `0${hours}`}:${
    minutes > 9 ? minutes : `0${minutes}`
  }:${seconds > 9 ? seconds : `0${seconds}`}`;
};

type TimerProps = {
  date: number;
  secondary?: boolean;
  text: string;
};

const Timer = (props: TimerProps) => {
  const { date, secondary, text } = props;
  const [timer, setTimer] = useState("00:00:00:00");

  useEffect(() => {
    const currentDate = new Date().getTime();
    let howLeft = date - currentDate;
    const show = howLeft < 1000 ? "00:00:00:00" : getTimerDate(howLeft);
    setTimer(show);
    if (howLeft > 1000) {
      const timerId = setInterval(() => {
        howLeft = howLeft - 1000;
        if (howLeft <= 1000) {
          clearInterval(timerId);
        }
        setTimer(getTimerDate(howLeft));
      }, 1000);
    }
  }, [date]);

  return (
    <TimerWrapper secondary={secondary}>{`${text.replace(
      "{timer}",
      timer
    )}`}</TimerWrapper>
  );
};

export default Timer;
