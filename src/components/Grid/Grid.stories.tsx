import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { object } from '@storybook/addon-knobs';
import Grid from "./Grid";
import { GridProps } from "../../types";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "GridMatrix/Grid",
  component: Grid,
} as ComponentMeta<typeof Grid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Grid> = (args) => {
  return (
    <div style={{ width: "400px", height: "400px", background: "yellow" }}>
      <Grid {...args} />
    </div>
  )
};

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

let sections: GridProps["sections"] = [
  {
    cover: 30,
    content: <div style={{ width: "100%", height: "100%", background: "#F8D800" }}>First Content</div>,
    align: 'bottom'
  },
  {
    cover: 50,
    content: <div style={{ width: "100%", height: "100%", background: "#0396FF" }}>Second Content</div>,
    align: 'top',
    subSection: [
      {
        cover: 30,
        content: <div style={{ width: "100%", height: "100%", background: "#C9E4DE" }}>subSection first Content</div>,
        align: "bottom"
      },
      {
        cover: 70,
        content: <div style={{ width: "100%", height: "100%", background: "#F2C6DE" }}>subSection second Content</div>,
        align: "bottom"
      }
    ]
  },
  {
    cover: 20,
    content: <div style={{ width: "100%", height: "100%", background: "#DEDAF4" }}>Third Content</div>,
    align: 'bottom'
  },
];

HelloWorld.args = {
  alignment: "horizontal",
  sections: object("sections", sections)
};

export const ClickMe = Template.bind({});

ClickMe.args = {
  alignment: "horizontal",
  sections: object("sections", sections)
};

ClickMe.args = {
  alignment: "vertical",
  sections: object("sections", sections)
};
