import React from "react";
import styled from "styled-components";
import Card from "./Card";

const ParentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
`;

export default () => {
  let size = ["20%", "30%", "50%"];
  let text = ["Lorem isum"];
  const propVal = [
    { color: "orange", label: size[0] },
    { color: "red", label: size[1] },
    { color: "green", label: size[2] }
  ];

  let cards = [
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
        { color: "red", label: this.size[1]},
        { color: "green", label: this.size[2] }
      ])}
    }
  ];
  return (
    <ParentGrid>
      {cards.map(curr => (
        <Card size={curr.size} colors={curr.statusData()} text={curr.text} />
      ))}
    </ParentGrid>
  );
};
