import React from "react";
import styled from "styled-components";
import Card from "./Card";

const ParentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
`;

let cardsArray = [
    {
      size: ["20%", "30%", "50%"],
      text: "Lorem ipsum rete",
      statusData() {return ([
        { color: "orange", label: this.size[0] },
        { color: "red", label: this.size[1]},
        { color: "green", label: this.size[2] }
      ])}
    },
    {
      size: ["10%", "30%", "60%"],
      text: "Lorem ipsum ",
      statusData() {return ([
        { color: "orange", label: this.size[0] },
        { color: "yellow", label: this.size[1]},
        { color: "blue", label: this.size[2] }
      ])}
    }
  ];

export default () => {
  return (
    <ParentGrid>
      {cardsArray.map(curr => (
        <Card size={curr.size} colors={curr.statusData()} text={curr.text} />
      ))}
    </ParentGrid>
  );
};
