import styled from "styled-components";

const renderBackground = (status: string) => {
  if (status === "active") {
    return "#6200EE";
  }
  if (status === "done") {
    return "#6200EE";
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
