import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { object } from '@storybook/addon-knobs';
import Grid from "../Grid";
import GridSection from "../GridSection";
import StackedGrid from "./StackedGrid";
import { GridSectionProps, StackedGridProps } from "../../types/index.types";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "GridMatrix/StackedGrid",
  component: StackedGrid,
  tags: ['autodocs'],
  columnList: { table: { expanded: true } },
  parameters: {
    docs: {
      description: {
        component: "`StackedGrid` allows you to stack `Grid` on top of each other and specify the `level` of each (z-index) when they render"
      }
    }
  }
} as Meta<typeof StackedGrid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StackedGrid> = (args) => {
  return (
    <div style={{ width: "400px", height: "400px", background: "#b3b3ff" }}>
      <StackedGrid grids={args.grids} />
    </div>
  )
};

export const twoBasic = Template.bind({});

let twoBasicSection: StackedGridProps = {
  grids: [
    {
      alignment: "horizontal",
      level: 1,
      sections: [
        {
          cover: 100,
          content: <div style={{ width: "100%", height: "100%", background: "rgba(248,216,0, 0.6)" }}>Bottom Content</div>,
          align: 'left-bottom'
        },
      ]
    },
    {
      alignment: "horizontal",
      level: 2,
      sections: [
        {
          cover: 20,
        },
        {
          cover: 80,
          content: <div style={{ width: "100%", height: "100%", background: "rgb(116,135,41, 0.5)"}}>Top Content</div>,
          align: 'right-top'
        },
      ]
    }
  ]
};

twoBasic.args = twoBasicSection;
twoBasic.parameters = {
  docs: {
    description: {
      story: "Example to show a `StackedGrid` with 2 `Grid` components on top of each other"
    },
  },
}

export const threeBasic = Template.bind({});

let threeBasicSection: StackedGridProps = {
  grids: [
    {
      alignment: "horizontal",
      level: 1,
      sections: [
        {
          cover: 100,
          content: <div style={{ width: "100%", height: "100%", background: "rgba(79,140,70, 0.3)" }}>Bottom</div>,
          align: 'left-bottom'
        },
      ]
    },
    {
      alignment: "horizontal",
      level: 2,
      sections: [
        {
          cover: 20,
        },
        {
          cover: 80,
          content: <div style={{ width: "100%", height: "100%", background: "rgba(79,140,70, 0.6)"}}>Middle</div>,
          align: 'right-top'
        },
      ]
    },
    {
      alignment: "horizontal",
      level: 3,
      sections: [
        {
          cover: 40,
        },
        {
          cover: 60,
          content: <div style={{ width: "100%", height: "100%", background: "rgba(79,140,70, 0.8)"}}>Top</div>,
          align: 'right-top'
        },
      ]
    }
  ]
};

threeBasic.args = threeBasicSection;
threeBasic.parameters = {
  docs: {
    description: {
      story: "Example to show a `StackedGrid` with 3 `Grid` components on top of each other. <br /> <br/> We can also do four, five, six, seven...."
    },
  },
}

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
          content: <div style={{ width: "100%", height: "100%", background: "#748729" }}>Top Content</div>,
          align: 'bottom'
        },
        {
          cover: 20,
          align: 'bottom'
        },
        {
          cover: 40,
          content: <div style={{ width: "100px", height: "100px", background: "#748729" }}>Bottom Content</div>,
          align: 'bottom'
        },
      ]
    }
  ]
};

twoComponents.args = twoComponentsSection;
twoComponents.parameters = {
  docs: {
    description: {
      story: "Example of `StackedGrid` with 2 `Grid` with different `align` and sections showing. <br /> Let me explain this: <br /> - Background is Purple <br/> - 2 horizontal `GridSection` on the `level: 1` with yellow background colors and 20% Spacer in between them <br /> - Top `level:2` has 2 `GridSection` with `align:vertical` and green background and a 20% Spacer in between them"
    },
  },
}
