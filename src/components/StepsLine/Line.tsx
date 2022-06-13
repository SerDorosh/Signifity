import styled from "styled-components";

const renderBackground = (status: string) => {
  if (status === "active" || status === "done") {
    return "#6200EE";
  }
  if (status === "complete") {
    return "#000000";
  }
  return "rgba(0, 0, 0, 0.6);";
};

const LineElement = styled.div`
  height: 1px;
  width: 180px;
  background: ${(props: { status: string }) => renderBackground(props.status)};
`;

type LineProps = {
  status: string;
};

export const Line = ({ status }: LineProps) => {
  return <LineElement status={status} />;
};
