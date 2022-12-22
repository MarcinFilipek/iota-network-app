import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Box } from "./Box";

const Template: ComponentStory<typeof Box> = (args) => (
  <div
    style={{
      width: "500px",
      height: "100%",
      padding: "20px",
    }}
  >
    <Box {...args}>
      <div style={{ width: "200px", height: "200px", padding: "16px" }}>
        <p>Box</p>
      </div>
    </Box>
  </div>
);

export const Default = Template.bind({});

Default.args = {};

export default {
  title: "Components/Box",
  component: Box,
} as ComponentMeta<typeof Box>;
