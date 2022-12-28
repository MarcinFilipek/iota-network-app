import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Checkbox } from "./Checkbox";

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <div
    style={{
      width: "500px",
      height: "100%",
      padding: "20px",
    }}
  >
    <Checkbox />
  </div>
);

export const Default = Template.bind({});

Default.args = {};

export default {
  title: "Forms/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;
