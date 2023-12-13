import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { object } from '@storybook/addon-knobs';
import Grid from "../Grid";
import GridSection from "./GridSection";
import { GridSectionProps } from "../../types/index.types";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "GridMatrix/GridSection",
  component: GridSection,
  tags: ['autodocs'],
  columnList: { table: { expanded: true } },
  parameters: {
    docs: {
      description: {
        component: "`GridSection` is used inside `Grid` component, it contains individual sections of your grid and holds the configs of how you treat this piece inside the grid."
      }
    }
  }
} as Meta<typeof GridSection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GridSection> = (args) => {
  return (
    <div style={{ width: "400px", height: "400px", background: "rgba(79,140,70, 1.0)" }}>
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
thirtyPercent.parameters = {
    docs: {
      description: {
        story: 'Example to show a `GridSection` with 30 (30%) cover of an item inside a `Grid`'
      },
    },
}


export const eightyPercent = Template.bind({});

let eightyPercentSection: GridSectionProps = {
  cover: 80,
  content: <div style={{ width: "100%", height: "40%", background: "#F8D800" }}>First Content</div>,
  align: 'bottom'
};

eightyPercent.args = eightyPercentSection;
eightyPercent.parameters = {
  docs: {
    description: {
      story: 'Example to show a `GridSection` with 80 (80%) cover and `align` to the bottom of an item inside a `Grid`'
    },
  },
}

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
BreakPoint.parameters = {
  docs: {
    description: {
      story: "Example to show a `GridSection` with content that ONLY shows in `md` (between 640 and 768) screensize <br /><br /> <p style='color: orange;'>If you can't see it, try adjusting your screensize</p>"
    },
  },
}

export const alignment = Template.bind({});

let alignmentPercentSection: GridSectionProps = {
  cover: 100,
  content: <div style={{ width: "100px", height: "100px", background: "#F8D800" }}>Small Square</div>,
  xAlign: 'middle',
  yAlign: 'bottom',
};

alignment.args = alignmentPercentSection;
alignment.parameters = {
  docs: {
    description: {
      story: "Example to show a `GridSection` with an `xAlign:middle` and `yAlign:bottom`, with 100 (100%) cover area"
    },
  },
}

