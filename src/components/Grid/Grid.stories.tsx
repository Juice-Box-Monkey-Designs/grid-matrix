import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { object } from '@storybook/addon-knobs';
import Grid from "./Grid";
import { GridProps, GridSectionProps } from "../../types";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "GridMatrix/Grid",
  component: Grid,
  tags: ['autodocs'],
  columnList: { table: { expanded: true } }
} as ComponentMeta<typeof Grid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Grid> = (args) => {
  return (
    <div style={{ width: "400px", height: "400px", background: "yellow" }}>
      <Grid {...args} />
    </div>
  )
};

export const Default = Template.bind({});

let defaultSection: GridProps["sections"] = [
  {
    cover: 30,
    content: <div style={{ width: "100%", height: "100%", background: "#F8D800" }}>First Content</div>,
    align: 'bottom'
  },
  {
    cover: 50,
    content: <div style={{ width: "100%", height: "100%", background: "#0396FF" }}>Second Content</div>,
    align: 'top',
  },
  {
    cover: 20,
    content: <div style={{ width: "100%", height: "100%", background: "#DEDAF4" }}>Third Content</div>,
    align: 'bottom'
  },
];

Default.args = {
  alignment: "horizontal",
  sections: object("sections", defaultSection)
};

export const Vertical = Template.bind({});
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
  },
  {
    cover: 20,
    content: <div style={{ width: "100%", height: "100%", background: "#DEDAF4" }}>Third Content</div>,
    align: 'bottom'
  },
];

Vertical.args = {
  alignment: "vertical",
  sections: sections
};

export const SubSection = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

let subSectionSections: GridProps["sections"] = [
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

SubSection.args = {
  alignment: "vertical",
  sections: subSectionSections
};

export const Spacer = Template.bind({});

let spacerSections: GridSectionProps[] = [
  {
    cover: 40,
    content: <div style={{ width: "100%", height: "100%", background: "#F8D800" }}>Left Content</div>,
    align: 'bottom'
  },
  {
    cover: 20,
    align: 'bottom'
  },
  {
    cover: 40,
    content: <div style={{ width: "100%", height: "100%", background: "#F8D800" }}>Right Content</div>,
    align: 'bottom'
  },
];

Spacer.args = {
  alignment: "horizontal",
  sections: spacerSections
};

export const BreakPoints = Template.bind({});

let mdSection: GridSectionProps[] = [
  {
    cover: 40,
    content: <div style={{ width: "100%", height: "100%", background: "#F8D800" }}>Left Content</div>,
    align: 'bottom'
  },
  {
    cover: 60,
    align: 'bottom'
  },
];

BreakPoints.args = {
  alignment: "horizontal",
  sections: defaultSection,
  mdSection: mdSection
};
