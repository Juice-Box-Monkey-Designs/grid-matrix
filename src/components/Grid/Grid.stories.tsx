import React from "react";
import { ComponentStory, Meta } from "@storybook/react";
import { object } from '@storybook/addon-knobs';
import Grid from "./Grid";
import { GridProps, GridSectionProps } from "../../types/index.types";
import "./Grid.css";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "GridMatrix/Grid",
  component: Grid,
  tags: ['autodocs'],
  columnList: { table: { expanded: true } },
  parameters: {
    docs: {
      description: {
        component: "`Grid` is an easy to use grid component to simplify complex grid structures in your React app."
      }
    }
  }
} as Meta<typeof Grid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Grid> = (args) => {
  return (
    <div style={{ width: "400px", height: "400px", background: "#4F8C46" }}>
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
Default.parameters = {
  docs: {
    description: {
      story: "Basic example to showcase a simple grid with 30%,50% and 20% sections"
    },
  },
}

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
Vertical.parameters = {
  docs: {
    description: {
      story: "Default but with an `alignment:vertical` to stack them vertically."
    },
  },
}

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
SubSection.parameters = {
  docs: {
    description: {
      story: "Example of a `subSection` that allows you to pass in an array of `GridSection` inside a `GridSection` inside a `GridSection`. Like Inception but for Grids"
    },
  },
}

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
Spacer.parameters = {
  docs: {
    description: {
      story: "Example of a `Spacer` when your `GridSection` just need a little space from each other. This conforms to your overall height and width of the containment of the `Grid` so you don't have custom margin causing alignment issues."
    },
  },
}

export const BreakPoints = Template.bind({});

let mdSection: GridSectionProps[] = [
  {
    cover: 40,
    content: <div style={{ width: "100%", height: "100%", background: "#52B2BF" }}>Left Content</div>,
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
BreakPoints.parameters = {
  docs: {
    description: {
      story: "Example to show a `GridSection` with content that ONLY shows in `md` (between 640 and 768) screensize <br /><br /> <p style='color: green;'>If you can't see it, try adjusting your screensize</p>"
    },
  },
}

export const CustomClass = Template.bind({});
let customSection: GridSectionProps[] = [
  {
    cover: 50,
    content: <div style={{ width: "100%", height: "100%", background: "#B2FFFF" }}>Left element</div>,
    align: 'bottom'
  },
];

CustomClass.args = {
  alignment: "horizontal",
  sections: customSection,
  className: "story-custom-style",
};
CustomClass.parameters = {
  docs: {
    description: {
      story: "We know sometimes you want to pass in your own classes that do certain things, `Grid` allows this."
    },
  },
}

export const CustomStyle = Template.bind({});
let customStyleSection: GridSectionProps[] = [
  {
    cover: 50,
    content: <div style={{ width: "100%", height: "100%", background: "#B2FFFF" }}>Left Content</div>,
    align: 'bottom'
  },
];

CustomStyle.args = {
  alignment: "horizontal",
  sections: customStyleSection,
  style: { "boxShadow": "1em 1em turquoise, -1em 0 .4em teal" },
};
CustomStyle.parameters = {
  docs: {
    description: {
      story: "Same goes with custom styles, `Grid` allows this. <br /> <br /> <p style='color: red;'>Obviously css rules apply, so if you use `!important` it may affect how `Grid` works for you.</p>"
    },
  },
}

export const Transform = Template.bind({});
let transformSection: GridSectionProps[] = [
  {
    cover: 50,
    content: <div style={{ width: "100%", height: "100%", background: "#B2FFFF" }}>Left Content</div>,
    align: 'bottom'
  },
  {
    cover: 50,
    content: <div style={{ width: "100%", height: "100%", background: "#D9FFFF" }}>Right Content</div>,
    align: 'bottom'
  },
];

Transform.args = {
  alignment: "horizontal",
  sections: transformSection,
  transform: "rotate(20deg) scale(0.5)"
};
Transform.parameters = {
  docs: {
    description: {
      story: "Example of passing in a custom `transform` prop which conforms to CSS `transform` property"
    },
  },
}

export const Containment = Template.bind({});
let ContainmentSection: GridSectionProps[] = [
  {
    cover: 50,
    content: <div style={{ width: "100%", height: "100%", background: "#B2FFFF" }}>50% Section in 300px containment inside a 400px, it also supports percents</div>,
    align: 'bottom'
  },
];

Containment.args = {
  alignment: "horizontal",
  sections: ContainmentSection,
  containment: {
    height: "300px",
    width: "100%"
  }
};
Containment.parameters = {
  docs: {
    description: {
      story: "Instead of wrapping your `Grid` in a div, you can specify containment `height` and `width` props to do it for you (And yes these can be percents, just string percents like `80%`)"
    },
  },
}
