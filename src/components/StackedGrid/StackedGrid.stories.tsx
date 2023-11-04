import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { object } from '@storybook/addon-knobs';
import Grid from "../Grid";
import GridSection from "../GridSection";
import StackedGrid from "./StackedGrid";
import { GridSectionProps, StackedGridProps } from "../../types";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "GridMatrix/StackedGrid",
  component: StackedGrid,
  tags: ['autodocs'],
  columnList: { table: { expanded: true } }
} as ComponentMeta<typeof StackedGrid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StackedGrid> = (args) => {
  return (
    <div style={{ width: "400px", height: "400px", background: "blue" }}>
      <StackedGrid grids={args.grids} />
    </div>
  )
};

export const twoBasic = Template.bind({});

let twoBasicSection: StackedGridProps = {
  grids: [
    {
      alignment: "vertical",
      level: 1,
      sections: [
        {
          cover: 50,
          content: <div style={{ width: "100px", height: "100px", background: "#F8D800" }}>Bottom Content</div>,
          align: 'left-bottom'
        },
      ]
    },
    {
      alignment: "vertical",
      level: 2,
      sections: [
        {
          cover: 50,
          content: <div style={{ width: "100px", height: "100px", background: "#748729" }}>Top Content</div>,
          align: 'right-top'
        },
      ]
    }
  ]
};

twoBasic.args = twoBasicSection;

export const twoComponents = Template.bind({});

let twoComponentsSection: StackedGridProps = {
  grids: [
    {
      alignment: "horizontal",
      level: 1,
      sections: [
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
      ]
    },
    {
      alignment: "vertical",
      level: 2,
      sections: [
        {
          cover: 40,
          content: <div style={{ width: "100%", height: "100%", background: "#748729" }}>Left Content</div>,
          align: 'bottom'
        },
        {
          cover: 20,
          align: 'bottom'
        },
        {
          cover: 40,
          content: <div style={{ width: "100px", height: "100px", background: "#748729" }}>Right Content</div>,
          align: 'bottom'
        },
      ]
    }
  ]
};

twoComponents.args = twoComponentsSection;