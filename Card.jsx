import React from "react";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
`;

const ChildGrid = styled.div`
  align-self: center;
  width: 100%;
  display: grid;
  grid-template-columns: ${props => props.size};
`;

const StatusBar = styled.div`
  background: ${props => props.color};
  height: 50px;
`;

export default ({ size, colors, text }) => {
  return (
    <Card>
      <ChildGrid size={size}>
        {colors.map(curr => (
          <StatusBar color={curr.color}>{curr.label}</StatusBar>
        ))}
      </ChildGrid>
      <p>{text}</p>
    </Card>
  );
};
