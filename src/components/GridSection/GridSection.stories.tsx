import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { object } from '@storybook/addon-knobs';
import Grid from "../Grid";
import GridSection from "./GridSection";
import { GridSectionProps } from "../../types";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "GridMatrix/GridSection",
  component: GridSection,
  tags: ['autodocs'],
  columnList: { table: { expanded: true } }
} as ComponentMeta<typeof GridSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GridSection> = (args) => {
  return (
    <div style={{ width: "400px", height: "400px", background: "blue" }}>
      <Grid alignment={"horizontal"} sections={[{...args}]} />
    </div>
  )
};

export const thirtyPercent = Template.bind({});

let thirtyPercentSection: GridSectionProps = {
  cover: 30,
  content: <div style={{ width: "100%", height: "40%", background: "#F8D800" }}>First Content</div>,
  align: 'top'
};

thirtyPercent.args = thirtyPercentSection;


export const eightyPercent = Template.bind({});

let eightyPercentSection: GridSectionProps = {
  cover: 80,
  content: <div style={{ width: "100%", height: "40%", background: "#F8D800" }}>First Content</div>,
  align: 'bottom'
};

eightyPercent.args = eightyPercentSection;

export const BreakPoint = Template.bind({});

let BreakPointSectionProps: GridSectionProps = {
  cover: 80,
  content: <div style={{ width: "100%", height: "40%", background: "#F8D800" }}>First Content</div>,
  align: 'bottom',
  xsSectionDisplay: "hide",
  smSectionDisplay: "hide",
  mdSectionDisplay: "show",
  lgSectionDisplay: "hide",
  xlSectionDisplay: "hide",
  xxlSectionDisplay: "hide",
  xxxlSectionDisplay: "hide",
};

BreakPoint.args = BreakPointSectionProps;

export const alignment = Template.bind({});

let alignmentPercentSection: GridSectionProps = {
  cover: 100,
  content: <div style={{ width: "100px", height: "100px", background: "#F8D800" }}>Small Square</div>,
  xAlign: 'align',
  yAlign: 'align',
};

alignment.args = alignmentPercentSection;

