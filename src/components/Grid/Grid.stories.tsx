import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Grid from "./Grid";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "GridMatrix/Grid",
  component: Grid,
} as ComponentMeta<typeof Grid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  alignment: "horizontal",
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  alignment: "horizontal",
};